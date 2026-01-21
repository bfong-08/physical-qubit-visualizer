from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from qubit import Qubit
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://b649c0dbc3ae:3000",
                   "http://localhost:3000",
                   "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

q = Qubit(1+0j, 0+0j)

@app.get("/api/amps")
async def get_state():
    alpha, beta = q.get_state()
    return {"alpha_real": alpha.real,
            "alpha_imag": alpha.imag,
            "beta_real": beta.real,
            "beta_imag": beta.imag}

class Item(BaseModel):
    gate_name: str
    phase: int | float

@app.post("/api/gate")
async def update_state(data: Item):
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
    alpha, beta = q.get_state()
    return {"alpha_real": alpha.real,
            "alpha_imag": alpha.imag,
            "beta_real": beta.real,
            "beta_imag": beta.imag}
