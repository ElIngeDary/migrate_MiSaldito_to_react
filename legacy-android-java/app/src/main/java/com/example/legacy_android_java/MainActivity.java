package com.example.legacy_android_java;

import com.example.legacy_android_java.R;
import android.os.Bundle;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import java.util.ArrayList;
import java.util.List;


public class MainActivity extends AppCompatActivity {

    private TextView tvSaldoActual;
    private RecyclerView rvMovimientos;
    private MovimientoAdapter adapter;
    private List<MovimientoModel> listaMovimientos;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // 1. Vincular componentes de la UI
        tvSaldoActual = findViewById(R.id.tvSaldoActual);
        rvMovimientos = findViewById(R.id.rvMovimientos);

        // 2. Configurar el RecyclerView
        rvMovimientos.setLayoutManager(new LinearLayoutManager(this));

        // 3. Cargar datos simulados (Simulando respuesta de API REST)
        cargarDatosSimulados();
    }

    private void cargarDatosSimulados() {
        // Establecer Saldo
        double saldoDisponible = 150.75;
        tvSaldoActual.setText(String.format("$%.2f", saldoDisponible));

        // Poblar lista de movimientos/recargas
        listaMovimientos = new ArrayList<>();
        listaMovimientos.add(new MovimientoModel("Recarga Claro", "24/10/2026 10:15", 5.00, "RECARGA"));
        listaMovimientos.add(new MovimientoModel("Supermaxi", "23/10/2026 18:30", 32.50, "PAGO"));
        listaMovimientos.add(new MovimientoModel("Recarga CNT", "22/10/2026 14:00", 10.00, "RECARGA"));
        listaMovimientos.add(new MovimientoModel("Pago de Luz CNEL", "20/10/2026 09:45", 28.10, "PAGO"));

        // Asignar adaptador al RecyclerView
        adapter = new MovimientoAdapter(listaMovimientos);
        rvMovimientos.setAdapter(adapter);
    }
}