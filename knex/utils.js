export const knex = require('knex')({
          client: 'mssql',
          connection: {
            options: {
              mapBinding: (value) => {
                // bind all strings to varchar instead of nvarchar
                if (typeof value === 'string') {
                  return {
                    type: TYPES.VarChar,
                    value,
                  };
                }

                // allow devs to pass tedious type at query time
                if (value != null && value.type) {
                  return {
                    type: value.type,
                    value: value.value,
                  };
                }

                // undefined is returned; falling back to default mapping function
              },
            },
          },
        });