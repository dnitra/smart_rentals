import React from 'react'
// import "./Styles/Dashboard.scss"
import { useCustomContexts } from '../../../../Context/ContextsProvider';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';



function Cashflow() {
    const { user, userData } = useCustomContexts();
    console.log(userData.rented_properties)


    const graph = []
    userData.rented_properties ? (
        userData.rented_properties.map(property => {
            console.log(property.name)
            let range = { min: 1000, max: 2500 }
            let delta = range.max - range.min
            const result = Math.round(range.min + Math.random() * delta)
            graph.push({ name: property.name, uv: result, pv: result, amt: result })

        })) : ""

    // const graph = [{ name: 'A', uv: 800, pv: 2000, amt: 2100 }, { name: 'B', uv: 400, pv: 2400, amt: 2400 }, { name: 'C', uv: 380, pv: 1400, amt: 200 }];

    return (
       
            <div className="dashboard__cashflow">
                <BarChart width={600} height={300} data={graph}>
                    <XAxis dataKey="name" stroke="#8884d8" />
                    <YAxis />
                    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                    <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar dataKey="uv" fill="blue" barSize={30} />
                </BarChart>
            </div>
    );
}

export default Cashflow