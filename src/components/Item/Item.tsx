import { FC, useRef, useState } from "react"
import { IDataParent } from "../../@types/data.type";
import { ArrowIcon } from "../../assets/icons";
import { useOutsideClick } from "../../commons/hooks/useOutsideClick";
import { useSortableData } from "../../commons/hooks/useSortableData";
import { formatDate } from "../../commons/formatDate";
import './item.scss'




export const Item: FC<IDataParent> = 
    ({ title, subTitle, dateStart, dateEnd, data }) => {
        const [isOpen, setIsOpen] = useState(false);
        const containerRef = useRef(null);

        let dataForSort = [...data];
        dataForSort.map((el, idx) => {
            return el['id'] = idx + 1
        })

        const { items, requestSort,sortConfig } = useSortableData(dataForSort)
        const getClassNamesFor =(name:string)=>{
            if(!sortConfig) return;
            return sortConfig.key === name ? sortConfig.direction : undefined
        }
        useOutsideClick(containerRef, () => setIsOpen(false))
        return (
            <div
                className="item"
                onClick={() => setIsOpen((p) => !p)}
                ref={containerRef}
            >
                <div className="item__header">
                    <p className="item__title">{title}</p>
                    <p className="item__sub-title">{subTitle}</p>
                    <p className="item__date">
                        {formatDate(dateStart) + " - " + formatDate(dateEnd)}
                    </p>
                </div>
                {isOpen && (
                    <table className="item-table">
                        <thead className="item-thead ">
                            <tr className="item-tr ">
                                <td
                                    className={`item-td item-td_sortable ${getClassNamesFor('id')} `}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        requestSort("id")
                                    }}
                                >
                                    #
                                    <span>
                                        <ArrowIcon />
                                    </span>

                                </td>
                                <td className="item-td " onClick={(e) => {
                                    e.stopPropagation()
                                    requestSort('title')
                                }}>Title</td>
                                <td
                                    className={`item-td ${getClassNamesFor('number')} `}
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        requestSort('number')
                                    }}
                                >
                                    Number
                                    <span><ArrowIcon /></span>

                                </td>
                            </tr>
                        </thead>
                        <tbody className="item-tbody">
                            {items.map((i) => (

                                <tr key={i.title} className="item-tr">
                                    <td className="item-td">{i.id}</td>
                                    <td className="item-td">{i.title}</td>
                                    <td className="item-td">{i.number}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        )
    }

