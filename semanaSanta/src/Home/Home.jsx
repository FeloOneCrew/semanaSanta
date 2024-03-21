import { semanaSanta } from "../utils/semanaSantaBd";


export function Home () {
    
    //zona de analisis de datos
    let filtro = semanaSanta.filter(function(dia){
        return(dia.costoEvento <= 15000)
    })
    

    let filtro2 = semanaSanta.filter(function(asistencia){
        return(asistencia.cantidadFeligreses < 3500 && asistencia.costoEvento < 35000 && asistencia.necesitaConfesion == false)
    })
    
    
    return(
        <>
         <section className="container">
            <div className="row">
              <div className="col-12 col-md-8">
                <h3>Programacion Semana Mayor</h3>
                <hr />
                {
                    semanaSanta.map(function(dia){
                        return(
                            <h1>{dia.eventoPrincipal}: costo $ {dia.costoEvento}</h1>
                            
                        )
                    })
                }
              </div>
                
            </div>
            
        </section>       
        
        
        </>



    )
}