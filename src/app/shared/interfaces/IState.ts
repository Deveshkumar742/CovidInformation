import { IDistrict } from '../../shared/interfaces/IDistrict';

// Interface for State Information.
export interface IState
{
    stateName : string;
    districtList : IDistrict[];
    //stateTotalCase: number;
    totalCases : number;
    active : number;
    recovered: number;
    deceased : number;
}
