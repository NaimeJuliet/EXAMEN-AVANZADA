
import {ServicioReserva} from '../services/ServicioReserva.js'

export class ControladorReserva{

    constructor(){}

    async ingresar(request,response){
        let reserva=new ServicioReserva() 
        let datosReserva=request.body 
        try{
            await  reserva.registrar(datosReserva) 
            response.status(200).json({
                mensaje:"exito en el ingreso de la reserva",
                datosIngresados:[],
                estado:true
            })
        }catch(error){
            response.status(400).json({
                mensaje:"fallamos en el ingreso de la reserva"+error,
                datosIngresados:[],
                estado:false
            })
        }
    }

    
    async buscarPorId(request,response){
        let reserva=new ServicioReserva()
        let id=request.params.id

        try{
            response.status(200).json({
                mensaje:"exito buscando la reserva por id",
                datos:await reserva.buscarPorId(id),
                estado:true
            })
        }catch(error){
            response.status(400).json({
                mensaje:"fallamos buscando la reserva por id"+error,
                datos:[],
                estado:false
            })
        }     
    }

    async editar(request,response){
        let reserva=new ServicioReserva()
        let id=request.params.id 
        let datosReserva=request.body 

        try{
            await reserva.editar(id,datosReserva)
            response.status(200).json({
                mensaje:"exito editando reserva por id",
                datos:"Datos del id: "+datosReserva,
                estado:true
            })
        }catch(error){
            response.status(400).json({
                mensaje:"fallamos editando reserva por id"+error,
                datos:[],
                estado:false
            })
        }  
    }

    async eliminar(request,response){
        let reserva=new ServicioReserva()
        let id=request.params.id 
        try{
            await reserva.eliminar(id)
            response.status(200).json({
                mensaje:"exito eliminando reserva por id",
                datos:"Datos del id: "+id,
                estado:true
            })
        }catch(error){
            response.status(400).json({
                mensaje:"fallamos eliminando reserva por id"+error,
                datos:"Datos del id: "+id,
                estado:false
            })
        }
    }

}