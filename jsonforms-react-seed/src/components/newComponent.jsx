import React, { useState } from 'react';
import axios from 'axios';

function NewComponent(props) {
     
    const initialSchema = {
                        "type": "object",
                        "properties": {
                            "name": {
                            "type": "string",
                            "minLength": 1
                            },
                            "email": {
                            "type": "string",
                            "minLength": 5
                            },
                            "password": {
                            "minLength": 5,
                            "type": "string"
                            }
                        },
                        "required": ["name", "password", "email"]
                    };
    const [schema, setSchema] = useState(initialSchema); 
    const [name, setName] = useState('name');
    const [json, setJson] = useState('');
    const changeName = (e) => { 
        setName(e.target.value)

    }
    const submitData = (e) => {
        e.preventDefault();
        console.log(JSON.parse(json))
           const details = { 
                        name: name,
                        
                        jsonform: JSON.parse(json) 
                    };

            axios.post('/api/json', details).then((res) => console.log(res)); 
        }
                   
    return (

        <div className="container mx-auto">
                <form className="space-y-8 divide-y divide-gray-200">
                    <div className="space-y-8 divide-y divide-gray-200"> 
                        <div>
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Create new form</h3> 
                        </div>

                        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">

                            <div className="sm:col-span-4">
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                    Form Name
                                </label>
                                <div className="mt-1 flex rounded-md shadow-sm"> 
                                    <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    value={name}
                                    autoComplete="username"
                                    onChange={(e) => setName(e.target.value)}
                                    className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-6">
                                <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                    JSON Schema
                                </label>
                                <div className="mt-1">
                                    <textarea
                                    id="about"
                                    name="about"
                                    rows={3}
                                    onChange={(e) => setJson( e.target.value)}
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                                    defaultValue={''}
                                    />
                                </div> 
                             
                            
                            <div className="pt-5">
                                <div className="flex justify-end">
                                    <button
                                        type="button"
                                        className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        // type="submit"
                                        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        onClick={submitData}
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                    
                    
                </form>
        </div> 

    );
}

export default NewComponent;