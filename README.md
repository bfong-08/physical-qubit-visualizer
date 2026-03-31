# Physics Qubit State Visualizer (NumPy)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Goals](#goals)
- [Project Structure](#project-structure)
- [Key Concepts](#key-concepts)
- [License](#license)
- [Contact](#contact)

## Overview

Pure single-qubit states are often visualized through the Bloch sphere, a unit sphere with poles corresponding to the states $\ket{0}$ and $\ket{1}$, $\ket{+}$ and $\ket{-}$, and $\ket{i}$ and $\ket{-i}$. This projects provides a user-friendly interface to update a qubit's state while reflecting that state on a motorized, Arduino-powered bloch sphere model.

## Features

- **Statevector-based simulation** of arbitrary quantum states
- **Gate operations:** Supports standard gates including X, H, Z, and rotation gates

## Goals

- **Enable visual understanding of quantum computing** through live updates to Dirac notation state and physical motorized Bloch sphere
- **Reinforce elementary quantum computing concepts** such as superposition, unitary transformations, and complex numbers
- Develop an aesthetically-pleasing and **user-friendly interface** through to ensure ease of use and clarity
- Ensure efficient and user-specific communication between **API endpoints**

## Project Structure

- [backend/](.\backend)
  - [src/](.\backend\src)
    - [app/](.\backend\src\app)
      - [main.py](.\backend\src\app\main.py)
      - [qubit.py](.\backend\src\app\qubit.py)
  - [requirements.txt](.\requirements.txt)
- [frontend/](.\frontend)
  - [src/](.\frontend\src)
    - [app/](.\frontend\src\app)
      - [globals.css](.\frontend\src\app\globals.css)
      - [layout.tsx](.\frontend\src\app\layout.tsx)
      - [page.tsx](.\frontend\src\app\page.tsx)
    - [hooks/](.\frontend\src\hooks)
      - [useClickOutside.tsx](.\)
- [LICENSE](.\LICENSE)
- [README.md](.\README.md)

## Key Concepts

- **Qubits** as complex state vectors
- **Quantum Gates** as complex transformation matrices
- **Spherical Coordinates** to outline the unit sphere
- **Bloch Sphere** as the unit sphere 

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Contact

Brandon Fong

branfong21@gmail.com

[https://github.com/bfong-08](https://github.com/bfong-08)