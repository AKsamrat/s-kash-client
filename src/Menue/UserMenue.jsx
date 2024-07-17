import React from 'react';
import MenuItem from './MenuItem';
import { TbLocationDollar } from 'react-icons/tb';
import { FaHandHoldingDollar } from 'react-icons/fa6';
import { TbUserDollar } from 'react-icons/tb';
import { LiaFileInvoiceDollarSolid } from 'react-icons/lia';

const UserMenue = () => {
  return (
    <div>
      <MenuItem
        icon={TbLocationDollar}
        label="Send Money"
        address="sendMoney"
      />
      <MenuItem icon={TbUserDollar} label="Cash Out" address="cashOut" />
      <MenuItem icon={FaHandHoldingDollar} label="Cash In" address="cashIn" />
      <MenuItem
        icon={LiaFileInvoiceDollarSolid}
        label="Transaction History"
        address="transactionHistory"
      />
    </div>
  );
};

export default UserMenue;
