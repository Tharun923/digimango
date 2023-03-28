import React, { useState } from "react";
import { useSelector } from "react-redux";
import features, { flaggedWith } from "../../features";
import {
  Header,
  Footer,
  Search,
  BillHistoryList,
  Wrapper,
} from "../../components";
import strings from "../../utils/localization";
import { getBillTotals } from "../../selectors/bills";

function BillHistory() {
  const billTotals = useSelector(getBillTotals);
  const { paidAmount } = billTotals;
  const [searchInput, setSearchInput] = useState("");
  return (
    <div>
      <Header title={strings.billHistory} amount={paidAmount} />
      <Wrapper>
        <Search value={searchInput} setValue={setSearchInput} />
        <BillHistoryList searchInput={searchInput} />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default flaggedWith(features.billHistory, BillHistory);
