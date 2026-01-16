from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from qubit import Qubit
import numpy as np

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
q = Qubit(0.6, 0.8)
q = Qubit(np.sqrt(1/2), np.sqrt(1/2) * 1j)

alpha, beta = q.get_state()

@app.get("/api/data")
async def root():
    return {"alpha_real": alpha.real,
            "alpha_imag": alpha.imag,
            "beta_real": beta.real,
            "beta_imag": beta.imag}