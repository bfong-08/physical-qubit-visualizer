import numpy as np
import numpy.typing as npt

class Qubit:
    def __init__(self, alpha:complex=1+0j, beta:complex=0+0j) -> None:
        if abs(abs(alpha)**2 + abs(beta)**2 - 1) > 1e-5:
            print(abs(alpha) ** 2 + abs(beta) ** 2 - 1)
            raise ValueError("The Euclidean norm of the qubit state must be 1")
        self.state: npt.NDArray  = np.array([alpha, beta])

    def __repr__(self) -> str:
        return f"[{self.state[0]:.2f}, {self.state[1]:.2f}]"
    
    def get_state(self):
        return self.state

    def set_state(self, alpha:complex, beta:complex) -> None:
        self.state = np.array([alpha, beta])

    def x(self) -> None:
        x = np.array([[0, 1], [1, 0]])
        self.state = self.state @ x

    def z(self) -> None:
        z = np.array([[1, 0], [0, -1]])
        self.state = self.state @ z

    def h(self) -> None:
        h = 1/np.sqrt(2) * np.array([[1, 1], [1, -1]])
        self.state = self.state @ h