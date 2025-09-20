import React from 'react';

const BStable = () => {
    return (
        <div>
            <div>
                <h2 style={{backgroundColor:"GrayText", color:"white", textAlign:"center", padding:"10px"}}>Bootstrap Table</h2>
            </div>
            <div>
                <div
                    className="table-responsive"
                >
                    <table
                        className="table table-striped table-bordered border-primary"
                    >
                        <thead>
                            <tr>
                                <th scope="col">SL</th>
                                <th scope="col">Name</th>
                                <th scope="col">Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="">
                                <td scope="row">1</td>
                                <td>Assad</td>
                                <td>Mirpur</td>
                            </tr>
                            <tr className="">
                                <td scope="row">2</td>
                                <td>Hares</td>
                                <td>Dhanmondi</td>
                            </tr>
                            <tr className="">
                                <td scope="row">3</td>
                                <td>Rasel</td>
                                <td>Lalbag</td>
                            </tr>
                            <tr className="">
                                <td scope="row">4</td>
                                <td>Rafi</td>
                                <td>Azimpur</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
            </div>
        </div>
    );
};

export default BStable;