﻿using Launchpad.Models;
using Microsoft.AspNet.Identity;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Launchpad.Services.Interfaces
{
    public interface IUserService
    {
        Task<IdentityResult> RegisterAsync(RegistrationModel model);

        Task<bool> IsValidCredential(string userName, string password);

        Task<ClaimsIdentity> CreateClaimsIdentityAsync(string userName, string authenticationType);
    }
}