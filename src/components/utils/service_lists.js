import airConditioningImage from '../../assets/air conditioning.jpg';
import brakesImage from '../../assets/brakes.jpg';
import coolingImage from '../../assets/cooling.jpg';
import electricalImage from '../../assets/electrical.jpg';
import exhaustImage from '../../assets/exhaust.jpg';
import generalImage from '../../assets/general.jpg';
import otherImage from '../../assets/other.jpg';
import preventiveImage from '../../assets/preventive.jpg';
import suspensionImage from '../../assets/suspension.jpg';

const services_en = [
    {
        category: "General Mechanical Services",
        image: generalImage,
        services: [
            "Oil and filter change",
            "Engine tune-up",
            "Computerized diagnostic scan",
            "Timing belt or timing chain replacement",
            "Water pump replacement",
            "Oil and coolant leak repair"
        ]
    },
    {
        category: "Brakes",
        image: brakesImage,
        services: [
            "Brake pad and rotor replacement",
            "Brake shoe and drum replacement",
            "Brake fluid replacement",
            "ABS system diagnosis and repair"
        ]
    },
    {
        category: "Suspension and Steering",
        image: suspensionImage,
        services: [
            "Shock and strut replacement",
            "Ball joint replacement",
            "Tie rod end replacement",
            "Bushing replacement",
            "Steering rack replacement",
            "Power steering pump replacement"
        ]
    },
    {
        category: "Air Conditioning",
        image: airConditioningImage,
        services: [
            "R-134a and R-1234yf refrigerant recharge",
            "Air conditioning system diagnosis",
            "Compressor replacement",
            "Condenser replacement",
            "Leak repair"
        ]
    },
    {
        category: "Cooling System",
        image: coolingImage,
        services: [
            "Radiator replacement",
            "Thermostat replacement",
            "Hose replacement",
            "Cooling system flush",
            "Coolant replacement"
        ]
    },
    {
        category: "Electrical System",
        image: electricalImage,
        services: [
            "Battery replacement",
            "Alternator replacement",
            "Starter motor replacement",
            "Electrical diagnostics",
            "Light and accessory repair"
        ]
    },
    {
        category: "Exhaust and Emissions",
        image: exhaustImage,
        services: [
            "Catalytic converter replacement",
            "Oxygen sensor replacement",
            "Exhaust system repair",
            "Check Engine light diagnosis"
        ]
    },
    {
        category: "Preventive Maintenance",
        image: preventiveImage,
        services: [
            "Complete vehicle inspection",
            "Pre-trip inspection",
            "Fluid level and condition check",
            "Filter replacement (air, cabin, and fuel)"
        ]
    },
    {
        category: "Other Services",
        image: otherImage,
        services: [
            "CV axle replacement",
            "Wheel bearing replacement",
            "Spark plug and ignition coil replacement",
            "EVAP system repair",
            "Code programming and clearing",
            "Trailer hitch installation",
            "Sensor replacement (ABS, crankshaft, camshaft, TPMS, etc.)"
        ]
    }
];

const services_es = [
    {
        category: "Servicios de Mecanica General",
        image: generalImage,
        services: [
            "Cambio de aceite y filtro",
            "Afinacion del motor",
            "Diagnostico con escaner computarizado",
            "Cambio de correa o cadena de distribucion",
            "Cambio de bomba de agua",
            "Reparacion de fugas de aceite y refrigerante"
        ]
    },
    {
        category: "Frenos",
        image: brakesImage,
        services: [
            "Cambio de pastillas y discos",
            "Cambio de zapatas y tambores",
            "Cambio de liquido de frenos",
            "Diagnostico y reparacion del sistema ABS"
        ]
    },
    {
        category: "Suspension y Direccion",
        image: suspensionImage,
        services: [
            "Cambio de amortiguadores y puntales",
            "Cambio de rotulas",
            "Cambio de terminales de direccion",
            "Cambio de bujes",
            "Cambio de cremallera de direccion",
            "Cambio de bomba de direccion hidraulica"
        ]
    },
    {
        category: "Aire acondicionado",
        image: airConditioningImage,
        services: [
            "Recarga de refrigerante R-134a y R-1234yf",
            "Diagnostico del aire acondicionado",
            "Cambio de compresor",
            "Cambio de condensador",
            "Reparacion de fugas"
        ]
    },
    {
        category: "Sistema de Enfriamiento",
        image: coolingImage,
        services: [
            "Cambio de radiador",
            "Cambio de termostato",
            "Cambio de mangueras",
            "Limpieza del sistema de refrigeracion (flush)",
            "Cambio de anticongelante"
        ]
    },
    {
        category: "Sistema Electrico",
        image: electricalImage,
        services: [
            "Cambio de bateria",
            "Cambio de alternador",
            "Cambio de motor de arranque",
            "Diagnostico electrico",
            "Reparacion de luces y accesorios"
        ]
    },
    {
        category: "Escape y Emisiones",
        image: exhaustImage,
        services: [
            "Cambio de catalizador",
            "Cambio de sensores de oxigeno",
            "Reparacion del sistema de escape",
            "Diagnostico de la luz de Check Engine"
        ]
    },
    {
        category: "Mantenimiento Preventivo",
        image: preventiveImage,
        services: [
            "Inspeccion completa del vehiculo",
            "Revision antes de salir de viaje",
            "Revision de fluidos",
            "Cambio de filtros (aire, cabina y combustible)"
        ]
    },
    {
        category: "Otros Servicios",
        image: otherImage,
        services: [
            "Cambio de ejes homocineticos (CV)",
            "Cambio de rodamientos de rueda",
            "Cambio de bujias y bobinas",
            "Reparacion del sistema EVAP",
            "Programacion y borrado de codigos",
            "Instalacion de enganche para remolque",
            "Reemplazo de sensores (ABS, ciguenal, arbol de levas, TPMS, etc.)"
        ]
    }
];

export { services_en, services_es };