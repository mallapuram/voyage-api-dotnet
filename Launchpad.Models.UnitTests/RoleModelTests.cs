﻿using Xunit;
using FluentAssertions;
using FluentValidation.Attributes;
using Launchpad.Models.Validators;

namespace Launchpad.Models.UnitTests
{
    public class RoleModelTests
    {
        [Fact]
        public void Class_Should_Have_Validator_Class()
        {
            typeof(RoleModel)
                .Should()
                .BeDecoratedWith<ValidatorAttribute>(_ => _.ValidatorType == typeof(RoleValidator));
        }
    }
}
