import React from "react";

function AvaliableCategories({ dataArray }) {
  console.log(dataArray.Organs, dataArray.Organs.length);
  let countOrgan = 1,
    countEquipment = 1,
    countMedicine = 1,
    countBlood = 1;

  return (
    <div>
      {
        <>
          <>
            {dataArray.Organs.length > 0 ? (
              <>
                <div>
                  <h2 className="type-head1">Organs</h2>
                  <div className="li-heading">
                    <p>S.No.</p>
                    <p>Name of Equipment</p>
                    <p>Quantity</p>
                    <p>Set Price(Rent)</p>
                  </div>
                </div>
                {dataArray.Organs.map((category) => {
                  return (
                    <div className="list-cont">
                      <div className="li">
                        <p>{countOrgan++}</p>
                        <p>{category.name}</p>
                        <p>{category.quantity}</p>
                        <p>{category.price}</p>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <></>
            )}
          </>

          <>
            {dataArray.Equipments.length > 0 ? (
              <>
                <div>
                  <h2 className="type-head1">Equipments</h2>
                  <div className="li-heading">
                    <p>S.No.</p>
                    <p>Name of Equipment</p>
                    <p>Quantity</p>
                    <p>Set Price(Rent)</p>
                  </div>
                </div>
                {dataArray.Equipments.map((category) => {
                  return (
                    <div className="list-cont">
                      <div className="li">
                        {" "}
                        <p>{countEquipment++}</p>
                        <p>{category.name}</p>
                        <p>{category.quantity}</p>
                        <p>{category.price}</p>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <></>
            )}
          </>

          <>
            {dataArray.Medicines.length > 0 ? (
              <>
                <div>
                  <h2 className="type-head1">Medicine</h2>
                  <div className="li-heading">
                    <p>S.No.</p>
                    <p>Name of Equipment</p>
                    <p>Quantity</p>
                    <p>Set Price(Rent)</p>
                  </div>
                </div>
                {dataArray.Medicines.map((category) => {
                  return (
                    <div className="list-cont">
                      <div className="li">
                        <p>{countMedicine++}</p>
                        <p>{category.name}</p>
                        <p>{category.quantity}</p>
                        <p>{category.price}</p>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <></>
            )}
          </>

          <>
            {dataArray.Bloods.length > 0 ? (
              <>
                <div>
                  <h2 className="type-head1">Blood</h2>
                  <div className="li-heading">
                    <p>S.No.</p>
                    <p>Name of Equipment</p>
                    <p>Quantity</p>
                    <p>Set Price(Rent)</p>
                  </div>
                </div>
                {dataArray.Bloods.map((category) => {
                  return (
                    <div className="list-cont">
                      <div className="li">
                      <p>{countBlood++}</p>
                      <p>{category.name}</p>
                      <p>{category.quantity}</p>
                      <p>{category.price}</p>
                      </div>
                      
                    </div>
                  );
                })}
              </>
            ) : (
              <></>
            )}
          </>
        </>
      }
    </div>
  );
}

export default AvaliableCategories;
