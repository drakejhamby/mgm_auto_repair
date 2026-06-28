import './Services.css';
import { useState } from 'react';
import { services_en } from './utils/service_lists';

function Services_en() {
    const [openCategories, setOpenCategories] = useState({});

    function handleCategoryToggle(categoryName) {
        setOpenCategories((prev) => ({
            ...prev,
            [categoryName]: !prev[categoryName]
        }));
    }

    return (
        <div>
            <div className="services">
                <h2>Services</h2>
                <ul>
                    {services_en.map((category) => (
                        <li key={category.category}>
                            <h2
                                className="main_services"
                                onClick={() => handleCategoryToggle(category.category)}
                            >
                                {category.category}
                            </h2>
                            {openCategories[category.category] && (
                                <div className="service-details">
                                    <img
                                        className="service-category-image"
                                        src={category.image}
                                        alt={category.category}
                                    />
                                    <ul className="child_services">
                                        {category.services.map((service) => (
                                            <li key={service}>{service}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Services_en;