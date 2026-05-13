from fastapi import FastAPI, Header, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from src.qubit import Qubit
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://b649c0dbc3ae:3000",
                   "http://localhost:3000",
                   "http://127.0.0.1:3000",
                   "https://bfong-qubit-visualizer.vercel.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

user_dict: dict[str, Qubit] = {}

async def get_anonymous_user(x_session_id: str = Header(None)):
    if not x_session_id:
        raise HTTPException(status_code=400, detail="Session ID missing")
    return x_session_id

@app.get("/api/amps")
async def get_state(session_id: str = Depends(get_anonymous_user)):
    if session_id not in user_dict.keys():
        user_dict[session_id] = Qubit(1+0j, 0+0j)
    alpha, beta = user_dict[session_id].get_state()
    theta, phi = user_dict[session_id].get_angles()
    return {"alpha_real": alpha.real,
            "alpha_imag": alpha.imag,
            "beta_real": beta.real,
            "beta_imag": beta.imag,
            "theta": theta,
            "phi": phi}

class Item(BaseModel):
    gate_name: str
    theta: int | float

@app.post("/api/gate")
async def update_state(data: Item, session_id: str = Depends(get_anonymous_user)):
    q = user_dict[session_id]
    match (data.gate_name):
        case "reset":
            q.reset_state()
        case "h":
            q.h()
        case "x":
            q.x()
        case "y":
            q.y()
        case "z":
            q.z()
        case "s":
            q.s()
        case "t":
            q.t()
        case "p":
            q.p(data.theta)
        case "r_x":
            q.r_x(data.theta)
        case "r_y":
            q.r_y(data.theta)
    alpha, beta = q.get_state()
    theta, phi = q.get_angles()
    return {"alpha_real": alpha.real,
            "alpha_imag": alpha.imag,
            "beta_real": beta.real,
            "beta_imag": beta.imag,
            "theta": theta,
            "phi": phi}
