import React from 'react';
import Pagination from './Pagination';
import ListData from './ListData';
import CompanyDetails from './CompanyDetails';
import Divider from '@material-ui/core/Divider';
class App extends React.Component {
    constructor() {
        super();

        // an example array of items to be paged
        var exampleItems = [...Array(150).keys()].map(i => ({
            id: (i + 1),
            name: 'John' + (i + 1),
            address: 'vile-parle' + i,
            revenue: '$' + i,
            phone: "12345678" + i,
        }));

        this.state = {
            exampleItems: exampleItems,
            pageOfItems: [],
            checkedProfile: [1, 2, 3]
        };

        // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
        this.onChangePage = this.onChangePage.bind(this);
    }

    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

    render() {
        return (
            <div>
                {/* <CompanyDetails></CompanyDetails> */}

                <div >
                    <h5>IG Comapany Details</h5>
                    <Divider variant="middle" />
                </div>
                <div style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent:"space-between",
                     
                    }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <h1>fsfsv</h1>
                        <h1>fsfsv</h1>
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <h1>fsfsv</h1>
                        <h1>fsfsv</h1>
                    </div>
                </div>
                <ListData rowData={this.state.pageOfItems} checkedProfile={this.state.checkedProfile}>

                    <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />
                </ListData>
            </div>
        );
    }
}

export default App;