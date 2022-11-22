import React from 'react'
import { useState } from 'react';
import { useCustomContexts } from '../../../../Context/ContextsProvider';

function DashboardReports() {
    const [detailsShown, setDetailsShown] = useState(false);
    const [active, setActive] = useState(false);
    const { user, userData, changeUserData } = useCustomContexts();

    console.log(userData)

  return (
    <div className='dashboard__reports-container'>
          <button
              className={
                  "dashboard__reports-container__links" +
                  (active === "cashflow" ? "--active" : "")
              }
              onClick={() => {
                  setDetailsShown("Cashflow");
                  setActive("cashflow");
              }}
          >
              Cashflow
          </button>

          {(() => {
              switch (detailsShown) {
                  case "Cashflow":
                      return (
                          <>
                              <div
                                  id="Cashflow"
                                  className="dashboard__reports-container__content"
                              >
                                  <p>Cashflow</p>
                              </div>
                          </>
                      );
                  default:
                      "";
              }
          })()}
    </div>
  )
}

export default DashboardReports




    // (
    //     <div className='dashboard__reports-container'>
    //         <button
    //             className={
    //                 "dashboard__reports-container__links" +
    //                 (active === "cashflow" ? "--active" : "")
    //             }
    //             onClick={() => {
    //                 setDetailsShown("Cashflow");
    //                 setActive("cashflow");
    //             }}
    //         >
    //             Cashflow
    //         </button>

    //         <button
    //             className={
    //                 "dashboard__reports-container__links" +
    //                 (active === "bills" ? "--active" : "")
    //             }
    //             onClick={() => {
    //                 setDetailsShown("Bills");
    //                 setActive("bills");
    //             }}
    //         >
    //             Bills
    //         </button>

    //         <button
    //             className={
    //                 "dashboard__reports-container__links" +
    //                 (active === "reports" ? "--active" : "")
    //             }
    //             onClick={() => {
    //                 setDetailsShown("Reports");
    //                 setActive("reports");
    //             }}
    //         >
    //             Reports
    //         </button>

    //         {(() => {
    //             switch (detailsShown) {
    //                 case "Cashflow":
    //                     return (
    //                         <>
    //                             <div
    //                                 id="Cashflow"
    //                                 className="dashboard__reports-container__content"
    //                             >
    //                                 <p>Cashflow</p>
    //                             </div>
    //                         </>
    //                     );
    //                 case "Bills":
    //                     return (
    //                         <>
    //                             <div
    //                                 id="Bills"
    //                                 className="dashboard__reports-container__content"
    //                             >
    //                                 <p>Bills</p>
    //                             </div>
    //                         </>
    //                     );
    //                 case "Reports":
    //                     return (
    //                         <>
    //                             <div
    //                                 id="Reports"
    //                                 className="dashboard__reports-container__content"
    //                             >
    //                                 <p>property</p>

    //                             </div>
    //                         </>
    //                     );
    //                 default:
    //                     "";
    //             }
    //         })()}
    //     </div>
    // )