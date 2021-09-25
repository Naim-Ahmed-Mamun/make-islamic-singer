import React, { useEffect, useState } from 'react';
import Member from '../Member/Member';
import SelectedMembers from '../SelectedMembers/SelectedMembers';

const TeamMembers = () => {
    // set members in state
    const [members, setMembers] = useState([]);
    // selected members set in state
    const [selectedMembers,setSelectedMembers] = useState([]);
    // load data
    useEffect(() => {
        fetch('/data.JSON')
            .then(res => res.json())
            .then(data => setMembers(data))
    }, []);
    // update selected members
    const handleMembersDetails = (member) => {
        const newMember = [...selectedMembers,member]
        setSelectedMembers(newMember);
    }
    return (
        <>
            <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="row">
                                {
                                    members.map(member => <Member key={member.id} handleMembersDetails={handleMembersDetails}
                                    member={member}></Member>)
                                }
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="selected_members">
                                <SelectedMembers selectedMembers={selectedMembers}></SelectedMembers>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    );
};

export default TeamMembers;