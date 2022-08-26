import { FC } from "react";
import { IData, IDataChunk, IDataParent, IRandomData } from "../../@types/data.type";
import { Branch } from "../branch/branch";
import { Item } from "../Item/Item";
import './tree.scss'


interface IProps {
    data: IRandomData
    



}
export const Tree: FC<IProps> = ({ data }) => {

    const generateTree: FC<IRandomData> = (data) => {

        const generateBranch: FC<IDataChunk> = (data) => {

            if (data.items.some((el) => el.hasOwnProperty("data"))) {
                return (
                    <>
                        {data.items.map(i => {
                         
                            return <Item key={i.title} {...(i as IDataParent)} />
                        }

                        )}
                    </>
                )
            } else {
                return (
                    <>
                        {data.items.map(i => (
                            <Branch key={i.title} title={i.title}>
                                {generateBranch(i as IDataChunk)}
                            </Branch>
                        ))}
                    </>
                )
            }
        }
        return (
            <div className="tree">
                {data.map(i => (
                    <Branch key={i.title} title={i.title}>
                        {generateBranch(i)}
                    </Branch>
                ))}
            </div>
        )
    }
    return generateTree(data)

}