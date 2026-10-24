package com.example.legacy_android_java;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;
import java.util.List;

public class MovimientoAdapter extends RecyclerView.Adapter<MovimientoAdapter.ViewHolder> {
    private List<MovimientoModel> listaMovimientos;

    public MovimientoAdapter(List<MovimientoModel> listaMovimientos) {
        this.listaMovimientos = listaMovimientos;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType){
        View view = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.item_movimiento, parent, false);
        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        MovimientoModel item = listaMovimientos.get(position);
        holder.tvComercio.setText(item.getComercio());
        holder.tvFecha.setText(item.getFecha());
        holder.tvMonto.setText(String.format("$%.2f", item.getMonto()));
    }

    @Override
    public  int getItemCount() {
        return listaMovimientos.size();
    }

    public static class ViewHolder extends RecyclerView.ViewHolder {
        TextView tvComercio, tvFecha, tvMonto;

        public ViewHolder(@NonNull View itemView) {
            super(itemView);
            tvComercio = itemView.findViewById(R.id.tvComercio);
            tvFecha = itemView.findViewById(R.id.tvFecha);
            tvMonto = itemView.findViewById(R.id.tvMonto);
        }
    }

}
