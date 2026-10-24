package com.example.legacy_android_java;

public class MovimientoModel {
    private String comercio;
    private String fecha;
    private double monto;
    private String tipo; // "RECARGA" o "PAGO"

    public MovimientoModel(String comercio, String fecha, double monto, String tipo) {
        this.comercio = comercio;
        this.fecha = fecha;
        this.monto = monto;
        this.tipo = tipo;
    }

    public String getComercio() { return comercio; }
    public String getFecha() { return fecha; }
    public double getMonto() { return monto; }
    public String getTipo() { return tipo; }
}
