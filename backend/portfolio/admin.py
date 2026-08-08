from django.contrib import admin

from .models import (
    Hero,
    HeroTitle,
    About,
    Skill,
    Education,
    Experience,
    Service,
    Project,
    SocialLink,
)


# Hero Title Inline
class HeroTitleInline(admin.TabularInline):
    model = HeroTitle
    extra = 1


# Hero
@admin.register(Hero)
class HeroAdmin(admin.ModelAdmin):
    list_display = (
        "full_name",
        "is_active",
        "created_at",
    )

    list_filter = (
        "is_active",
    )

    search_fields = (
        "full_name",
        "subtitle",
    )

    ordering = (
        "-created_at",
    )

    inlines = [
        HeroTitleInline,
    ]



# About
@admin.register(About)
class AboutAdmin(admin.ModelAdmin):
    list_display = (
        "heading",
        "email",
        "phone",
        "created_at",
    )

    search_fields = (
        "heading",
        "email",
        "phone",
    )

    ordering = (
        "-created_at",
    )



# Skill Admin
@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):

    list_display = (
        "skill_name",
        "description",
        "display_order",
        "is_active",
    )


    list_filter = (
        "is_active",
    )


    search_fields = (
        "skill_name",
    )


    ordering = (
        "display_order",
    )



# Education
@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
    list_display = (
        "degree",
        "institution",
        "location",
        "start_year",
        "end_year",
        "display_order",
        "is_active",
    )

    list_filter = (
        "is_active",
    )

    search_fields = (
        "degree",
        "institution",
        "location",
    )

    ordering = (
        "display_order",
    )



# Experience
@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = (
        "job_title",
        "company",
        "employment_type",
        "currently_working",
        "display_order",
        "is_active",
    )

    list_filter = (
        "employment_type",
        "currently_working",
        "is_active",
    )

    search_fields = (
        "job_title",
        "company",
    )

    ordering = (
        "display_order",
    )



# Services
@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "display_order",
        "is_active",
    )

    list_filter = (
        "is_active",
    )

    search_fields = (
        "title",
    )

    ordering = (
        "display_order",
    )



# Projects
@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "is_featured",
        "display_order",
        "is_active",
    )

    list_filter = (
        "is_featured",
        "is_active",
    )

    search_fields = (
        "title",
        "technologies",
    )

    ordering = (
        "display_order",
    )



# Social Links
@admin.register(SocialLink)
class SocialLinkAdmin(admin.ModelAdmin):
    list_display = (
        "platform",
        "display_order",
        "is_active",
    )

    list_filter = (
        "is_active",
    )

    search_fields = (
        "platform",
    )

    ordering = (
        "display_order",
    )