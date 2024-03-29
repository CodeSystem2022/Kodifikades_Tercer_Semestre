
package test;

import Java.Semana8.acceso_datos.IAccesoDatos;
import accesodatos.*;

public class TestInterfaces {
    public static void main(String[] args) {
        IAccesoDatos datos = new ImplementacionMySql();
        //datos.listar();
        //imprimir(datos);
        // polimorfismo, una misma variable apunta a diferentes implementaciones
        datos = new ImplementacionOracle();
        // datos.listar();
        imprimir(datos);
    }

    public static void imprimir(IAccesoDatos datos) {
        datos.listar();
    }
}