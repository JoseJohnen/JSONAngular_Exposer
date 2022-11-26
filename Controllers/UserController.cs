using Microsoft.AspNetCore.Mvc;
using JSONAngular_Exposer.Models;
using System.Text.Json;
using static System.Net.Mime.MediaTypeNames;
using static System.Net.WebRequestMethods;

namespace JSONAngular_Exposer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly ILogger<UserController> _logger;

        public UserController(ILogger<UserController> logger)
        {
            _logger = logger;
        }

        #region API Methods
        [HttpGet]
        public IEnumerable<User> Get()
        {
            List<User> l_users = null;
            //Obtener desde texto .json
            //l_users = JsonSerializer.Deserialize<List<User>>(GetJSONFromFile(Directory.GetCurrentDirectory() + @"/DataSource.json"));
            
            //Obtener desde API
            l_users = JsonSerializer.Deserialize<List<User>>(GetJSONFromUrl("https://jsonplaceholder.typicode.com/users").Result);

            return l_users;
        }
        #endregion

        #region Suplementary Functions
        public async Task<string> GetJSONFromUrl(string url)
        {
            try
            {
                string strJson = string.Empty;
                using (HttpClient httpClnt = new HttpClient())
                {
                    HttpResponseMessage response = await httpClnt.GetAsync(url);
                    if (response.IsSuccessStatusCode)
                    {
                        strJson = await response.Content.ReadAsStringAsync();
                    }
                }
                return strJson;
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error GetJSONFromUrl: "+ex.Message);
                return string.Empty;
            }
        }

        public string GetJSONFromFile(string path)
        {
            try
            {
                string str = string.Empty;
                using (StreamReader r = new StreamReader(path))
                {
                    str = r.ReadToEnd();
                }
                return str;
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error GetJSONFromFile: "+ex.Message);
                return string.Empty;
            }
        }
        #endregion
    }
}