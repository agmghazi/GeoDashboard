using DataModels;
using DataModels.AwModels;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Script.Serialization;

namespace AspMVC_React.Controllers.API 
{
    public class DataRepoController : ApiController
    {
        // GET api/<controller>
        private PrioritiesDBEntities db = new PrioritiesDBEntities();

        public IHttpActionResult Get(int locationId, string locationType)
        {
          
            var result = GetDataSetExternalConnection ("Data Source=10.80.60.193;Initial Catalog=PrioritiesDB_Barrom;User ID=awlwiatapp;Password=app1234;", "GetCityPopSumByReg " , "GetCityPopSumByReg", new SqlParameter("@reg", locationId));

            List <KeyValModel> lKyVl = new List<KeyValModel>();
            foreach (DataColumn item in result.Tables["GetCityPopSumByReg"].Columns)
            {
                lKyVl.Add(new KeyValModel { key = item.ColumnName, value = result.Tables["GetCityPopSumByReg"].Rows[0][item.ColumnName].ToString() });
            }

            var jResult = new JavaScriptSerializer().Serialize(lKyVl);

            return Ok( jResult);
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public IHttpActionResult Post([FromBody] string value)
        {

            List<string> values = new List<string>();


            return Ok("done");

        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }







        public static DataSet GetDataSetExternalConnection(string connectionstring, string stored_name, string table_name, params SqlParameter[] prmarr)
        {
            SqlConnection con = new SqlConnection(connectionstring);
            SqlCommand cmd = new SqlCommand(stored_name, con);
            foreach (SqlParameter prm in prmarr)
            {
                cmd.Parameters.Add(prm);
            }
            cmd.CommandType = CommandType.StoredProcedure;
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataSet ds = new DataSet();
            da.Fill(ds, table_name);
            return ds;
        }






    }
}