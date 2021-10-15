import React from "react";
import MaterialTable from "material-table";
// import ArrowDownward from '@material-ui/icons/ArrowDownward';
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";

const header_style = {
  backgroundColor: '#1DB954',
  color: '#FFF',
}

const NewReleasesTable = ({new_releases}) => {

        return (
        <React.Fragment>
          <MaterialTable
            title="New Releases Table"
            columns={
                    [
                        { 
                            title: 'Artist', 
                            field: 'artists',
                            headerStyle: header_style,
                            render: rowData => {
                                return (
                      
                                          rowData.artists.map( (artist) => {
                                              {return <p key={artist.name} >{artist.name}</p>}
                                          } )
                                      
                                )
                              }
                        },
                        // { title: 'Name', field: 'name', cellStyle: column_style },
                        { title: 'Type', field: 'album_type', headerStyle: header_style },
                        { title: 'Release Date', field: 'release_date', headerStyle: header_style },
                        { title: '# Tracks', field: 'total_tracks', headerStyle: header_style },
                    ]   
                }
            data={new_releases.items}
            // data={[
            //   { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
            //   { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
            // ]}        
            options={{
              sorting: true,        
            }}
          />
        </React.Fragment>
        )
}

export default NewReleasesTable;



  