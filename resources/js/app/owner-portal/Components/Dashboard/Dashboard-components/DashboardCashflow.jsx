import React from "react";
// import "./Styles/Dashboard.scss"
import { useCustomContexts } from "../../../../Context/ContextsProvider";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    CartesianGrid,
} from "recharts";

function DashboardCashflow() {
    const { user, userData } = useCustomContexts();

    const months = ["June", "Jule", "August", "September", "October"];

    const graph = [];
    userData.rented_properties
        ? months.map((month) => {
              let range = { min: 100000, max: 250000 };
              let delta = range.max - range.min;
              const result = Math.round(range.min + Math.random() * delta);
              graph.push({
                  name: month,
                  Incoming: result,
                  pv: result,
                  amt: result,
              });
          })
        : "";

    // const graph = [{ name: 'A', uv: 800, pv: 2000, amt: 2100 }, { name: 'B', uv: 400, pv: 2400, amt: 2400 }, { name: 'C', uv: 380, pv: 1400, amt: 200 }];

    return (
        // <div className="dashboard__cashflow">
        <BarChart
            className="dashboard__cashflow-bar"
            width={300}
            height={300}
            data={graph}
        >
            <XAxis dataKey="name" stroke="#12476f" />
            {/* <YAxis /> */}
            <Tooltip
                wrapperStyle={{ width: 250, backgroundColor: "#91B8F2" }}
            />
            <Bar dataKey="Incoming" fill="#91B8F2" barSize={70} />
        </BarChart>
        // </div>
    );
}

export default DashboardCashflow;
