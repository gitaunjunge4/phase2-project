import React, {useState} from 'react';
import '../App.css';

function Addcar({onAdd}){

    //saves formData into state
    const [formData, setFormData] = useState({
        car: "",
        car_logo: "",
        car_model: "",
        car_transmission: "",
        car_condition: "",
        fuel_type: "",
        car_color: "",
        car_model_year: "",
        car_engine_size: "",
        price: "",
        availability: false,
        Damages: false,
        theft: false,
        image_url: ""
    });

    //updates state when input onChanges
    function handleInput(e){
        e.preventDefault();
        const name = e.target.name;
        let value = e.target.value;
        console.log(name);
        console.log(value);
        setFormData({
            ...formData,
            [name]: value
        });
    };

    //handles onSubmit of the form 
    function handleSubmit(e){
        e.preventDefault();
        onAdd(formData)
    }


    return (
        <div id="contact" className="contact-area section-padding">
            <div className="container">										
                <div className="section-title text-center">
                    <h1>Add Car Form</h1>
                </div>					
                <div className="row">
                    <div className="col-lg-7">	
                        <div className="contact">
                            <form className="form" name="enq" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="form-group col-md-12">
                                        <input type="text" name="car" className="form-control" placeholder="Car" required="required" onChange={handleInput}/>
                                    </div>
                                    <div className="form-group col-md-12">
                                        <input type="text" name="car_logo" className="form-control" placeholder="Car Logo Url" required="required" onChange={handleInput}/>
                                    </div>
                                    <div className="form-group col-md-12">
                                        <input type="text" name="car_model" className="form-control" placeholder="Car Model" required="required" onChange={handleInput}/>
                                    </div>
                                    <div className="form-group col-md-12">
                                        <input type="text" name="car_transmission" className="form-control" placeholder="Transmission" required="required" onChange={handleInput}/>
                                    </div>
                                    <div className="form-group col-md-12">
                                        <input type="text" name="car_condition" className="form-control" placeholder="Condition" required="required" onChange={handleInput}/>
                                    </div>
                                    <div className="form-group col-md-12">
                                        <input type="text" name="fuel_type" className="form-control" placeholder="Fuel type" required="required" onChange={handleInput}/>
                                    </div>
                                    <div className="form-group col-md-12">
                                        <input type="text" name="car_color" className="form-control" placeholder="Color" required="required" onChange={handleInput}/>
                                    </div>
                                    <div className="form-group col-md-12">
                                        <input type="text" name="car_model_year" className="form-control" placeholder="Model Year" required="required" onChange={handleInput}/>
                                    </div>
                                    <div className="form-group col-md-12">
                                        <input type="text" name="car_engine_size" className="form-control" placeholder="Engine Size" required="required" onChange={handleInput}/>
                                    </div>
                                    <div className="form-group col-md-12">
                                        <input type="text" name="price" className="form-control" placeholder="Price" required="required" onChange={handleInput}/>
                                    </div>
                                    <div className="form-group col-md-12">
                                        <input type="text" name="image_url" className="form-control" placeholder="Car Image URL" required="required" onChange={handleInput}/>
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <button type="submit" value="Add Car" name="submit" id="submitButton" className="btn btn-contact-bg" title="Add Your Car!">Add Car</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Addcar;