import React from 'react';
import './SelectedMembers.css';

const SelectedMembers = (props) => {
    const { selectedMembers } = props;
    // update total price
    const total = selectedMembers.reduce((previous, currentBalance) => previous + parseInt(currentBalance.balance), 0)
    return (
        <>
            <h2 className="selected_title mb-5 text-center">Members Added: <span>{selectedMembers.length}</span></h2>
            {
                // display name and cost
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
            {/* display total price */}
            <div className="totalPrice d-flex justify-content-between mt-2 pt-2">
                <h4>Total Price</h4>
                <h5>{total}</h5>
            </div>
        </>
    );
};

export default SelectedMembers;