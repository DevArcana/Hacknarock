using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Primitives;

namespace Application.Users
{
    [AttributeUsage(AttributeTargets.Method)]
    public class AuthorizeAttribute : Attribute, IAuthorizationFilter
    {
        public void OnAuthorization(AuthorizationFilterContext context)
        {
            context.HttpContext.Request.Headers.TryGetValue("Phone-Number", out StringValues phoneNumbers);

            if (phoneNumbers.Count == 0)
            {
                context.Result = new UnauthorizedResult();
            }
        }
    }
}
