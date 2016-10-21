﻿using Launchpad.Models.EntityFramework;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace Launchpad.Data.Configuration
{
    /// <summary>
    /// Sample Code First Configuration
    /// </summary>
    public class WidgetConfiguration : EntityTypeConfiguration<Widget>
    {
        public WidgetConfiguration()
        {
            ToTable("Widget");

            //Configure the entity key
            HasKey(_ => _.Id);
            
            //Configure the entity properties
            Property(_ => _.Id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);
            Property(_ => _.Name).HasMaxLength(60);
            Property(_ => _.Color).HasMaxLength(60);
        }
    }
}
