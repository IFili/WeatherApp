using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using WeatherApp.Models;

namespace WeatherApp.Controllers
{
	public class HomeController : Controller
	{
		public IActionResult Index()
		{
			List<User> users = new List<User>();
			
			//connect to mysql
			using (MySqlConnection con = new MySqlConnection("server=localhost; user=root; database=weatherappdb;port=3306;password=lopertur123"))
			{
				MySqlCommand cmd = new MySqlCommand("SELECT * FROM weatherappdb.password_table;", con);
				MySqlDataReader reader = cmd.ExecuteReader();

				while(reader.Read())
				{
					con.Open();
					//extract your data
					User user = new User();
					user.Id = Convert.ToInt32(reader["id"]);
					user.FirstName = reader["first_name"].ToString();
					user.FirstName = reader["last_name"].ToString();
					user.FirstName = reader["email"].ToString();
					user.FirstName = reader["password"].ToString();

					users.Add(user);	
				}
				reader.Close();
			}
			return View(users);
		}
	}
}
