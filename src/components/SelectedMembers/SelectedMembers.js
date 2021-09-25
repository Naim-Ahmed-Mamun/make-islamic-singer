import React from 'react';
import './SelectedMembers.css';

const SelectedMembers = (props) => {
    // console.log(props.memberDetails);
    const { selectedMembers } = props;
    // update total price
    const total = selectedMembers.reduce((previous, current) => previous + parseInt(current.balance), 0)
    return (
        <>
            <h2 className="selected_title mb-5 text-center">Members Added: <span>{selectedMembers.length}</span></h2>
            {
                selectedMembers.map(selectedMember => {
                    return (
                        <>
                            <div className="select_box d-flex justify-content-between mb-2">
                                <h4 className="name">{selectedMember.name}</h4>
                                <h5 className="price">{selectedMember.balance}</h5>
                            </div>
                        </>
                    )
                })
            }
            <div className="totalPrice d-flex justify-content-between mt-2 pt-2">
                <h4>Total Price</h4>
                <h5>{total}</h5>
            </div>
        </>
    );
};

export default SelectedMembers;