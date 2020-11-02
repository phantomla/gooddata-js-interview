
import React, { useCallback, useMemo, useState } from 'react';
import { ColumnChart, Model } from "@gooddata/react-components";

import Pulldown from '../../common/Pulldown/index';
import { dateAttribute, grossProfitMeasure, projectId, yearDateIdentifier } from './config';

const GrossProfitComponent: React.FC = () => {

  // Define projit value by year
  // initValue = 2015
  const [profitYear, setProfitYear] = useState<number>(2015);

  //get filters ColumnChart in Year
  const filters = useMemo(() =>  (
    [
      Model.absoluteDateFilter(dateAttribute, `${profitYear}-01-01`, `${profitYear}-12-31`),
    ]
  ),[profitYear]);

  //get measures ColumnChart
  const measures: Model.MeasureBuilder[] = useMemo(() => (
     [
      Model.measure(grossProfitMeasure)
        .localIdentifier("m1")
        .alias("$ Gross Profit"),
    ]
  ),[]);

  //get viewaBy ColumnChart by Years
  const viewBy: Model.AttributeBuilder = useMemo(() => (
    Model.attribute(yearDateIdentifier).localIdentifier("a1")
  ),[]);

  //handle onchange Pulldown
  const onChangePulldown = useCallback((value: any) => {
    const profit: number = value !== undefined ? Number(value) : 0;

    setProfitYear(profit);
  },[profitYear]);

  //list Pulldowns
  const listPullDownsName: string[] = ['2015' , '2016', '2017'];
    
  return (
      <>
        <h1>$ Gross Profit in Year {
          <Pulldown name={listPullDownsName} onChange={onChangePulldown}/>
        }
        </h1>
        <div>
          <ColumnChart
            measures={measures}
            filters={filters}
            projectId={projectId}
          />
        </div>
        <h1>$ Gross Profit in Year - All years</h1>
        <div>
          <ColumnChart
            measures={measures}
            viewBy={viewBy}
            projectId={projectId}
          />
        </div>
      </>
    );
}
export default React.memo(GrossProfitComponent);
