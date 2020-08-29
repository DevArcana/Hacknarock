using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Primitives;

namespace Application.Users
{
    [AttributeUsage(AttributeTargets.Method | AttributeTargets.Class)]
    public class StupidAuth : Attribute, IAuthorizationFilter
    {
        public void OnAuthorization(AuthorizationFilterContext context)
        {
            context.HttpContext.Request.Headers.TryGetValue("Phone-Number", out StringValues phoneNumbers);
            var phoneNumber = phoneNumbers.FirstOrDefault();
            
            if (phoneNumber == null)
            {
                context.Result = new UnauthorizedResult();
            }
            else
            {
                context.HttpContext.User.AddIdentity(new GenericIdentity(phoneNumber, "StupidAuth"));
            }
        }
    }
}
