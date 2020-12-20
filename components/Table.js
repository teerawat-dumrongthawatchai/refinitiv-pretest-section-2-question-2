const Table = ({ data }) => {
    return (
        <div>
            <div className="total-items py-1"><h6>Total Data : {data.length}</h6></div>
            <table className="table table-striped table-dark">
                <thead>
                <tr>
                    <th scope="col" width="50">#</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                {
                    (data.length > 0) ?
                    data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{item}</td>
                            </tr>
                        )
                    })
                    :
                    <tr>
                        <td className="text-center full-row">No content.</td>
                    </tr>
                }
                </tbody>
            </table>
        </div>
    )
}

export default Table