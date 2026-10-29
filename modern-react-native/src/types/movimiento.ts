export interface Movimiento {
    id: string;
    comercio: string;
    fecha: string;
    monto: number;
    tipo: 'RECARGA' | 'PAGO';

    }