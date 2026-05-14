import numpy as np

def get_anti_global_phase(alpha: complex) :
    a = alpha.real
    b = alpha.imag

    angle = b / a
    phi = np.atan(angle)

    if a < 0:
        if b >= 0:
            phi += np.pi
        elif b < 0:
            phi -= np.pi
    elif a == 0:
        if b > 0:
            phi = np.pi / 2
        elif b < 0:
            phi = -np.pi / 2
        elif b == 0:
            phi = 0
    
    return np.exp(np.multiply(phi, 0-1j))
        
def get_angles(alpha: complex, beta: complex):
    anti_global_phase = get_anti_global_phase(alpha)
    new_alpha = np.multiply(alpha, anti_global_phase)
    new_beta = np.multiply(beta, anti_global_phase)

    print(alpha)

    r_a = np.sqrt(np.abs(new_alpha.real)**2+np.abs(new_alpha.imag)**2)

    print(r_a)

    theta = 2 * np.acos(r_a)
    if theta > np.pi:
        theta = np.mod(theta, np.pi)
    phi = np.angle(new_beta) - np.angle(new_alpha)
    if phi > 2 * np.pi:
        phi = np.mod(phi, 2 * np.pi)

    return theta, phi
