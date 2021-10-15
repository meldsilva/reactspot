import React from "react";
import MaterialTable from "material-table";

const header_style = {
  backgroundColor: '#1DB954',
  color: '#FFF',
  fontSize: 17,
  fontWeight: 'bold',
  width: 800,
  maxWidth: 800
  
}

const NewReleasesTable = ({new_releases}) => {

        return (

          <MaterialTable
            title="New Releases Table"
            columns={
                    [
                      {
                        title: 'Name',
                        field: 'name',
                        headerStyle: header_style,
                        // width: "500"

                      },
                      { 
                          title: 'Artist', 
                          field: 'artists',
                          headerStyle: header_style,
                          render: rowData => {
                              return (
                                        
                                        rowData.artists.map( (artist) => {
                                          // {return artist.name} >{artist.name}</p>}
                                            {return <p key={artist.name} >{artist.name}</p>}
                                        } )
                                    
                              )
                            }
                      },
                      { title: 'Type', field: 'album_type', headerStyle: header_style },
                      { title: 'Release Date', field: 'release_date', type: 'date', headerStyle: header_style },
                      { title: '# Tracks', field: 'total_tracks', type: 'numeric', headerStyle: header_style },
                  ]   
              }
            data={new_releases.items}
            // data={[
            //   { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
            //   { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
            // ]}        
            options={{
              sorting: true,
              search: true,
              pageSize: 20,
              showTitle: false,
              maxBodyHeight: '500px',
              searchFieldAlignment: 'left',
              
              // exportButton: true
              // tableLayout: 'fixed'
              // tableLayout: 'auto'   
            }}
          />
        )
}

export default NewReleasesTable;



  