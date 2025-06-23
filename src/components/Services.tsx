import { ServicesData } from "../data/data";
export default function Services() {

    return (
        <div className="flex justify-center items-center" id="servicos">
            {ServicesData.map((service: any) => (
                <div key={service.id} className="flex flex-col justify-center items-center m-4">
                    <img src={service.image} alt={service.name} className="w-20 h-20" />
                    <h3 className="text-xl font-bold">{service.name}</h3>
                    <p className="text-center">{service.description}</p>
                </div>
            ))}
       

        </div>
    )
}