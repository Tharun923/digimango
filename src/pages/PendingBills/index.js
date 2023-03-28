import React, { useState } from "react";
import { useSelector } from "react-redux";
import features, { flaggedWith } from "../../features";
import {
  Header,
  Wrapper,
  Search,
  PendingBillsList,
  Footer,
} from "../../components";
import strings from "../../utils/localization";
import { getBillTotals } from "../../selectors/bills";

function PendingBills() {
  const billTotals = useSelector(getBillTotals);
  const { pendingAmount } = billTotals;
  const [searchInput, setSearchInput] = useState("");
  return (
    <div>
      <Header title={strings.pendingBills} amount={pendingAmount} />
      <Wrapper>
        <Search value={searchInput} setValue={setSearchInput} />
        <PendingBillsList searchInput={searchInput} />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default flaggedWith(features.pendingBills, PendingBills);
