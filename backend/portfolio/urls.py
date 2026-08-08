from django.urls import path

from .views import (
    HeroListAPIView,
    AboutListAPIView,
    SkillListAPIView,
    EducationListAPIView,
    ExperienceListAPIView,
    ServiceListAPIView,
    ProjectListAPIView,
    SocialLinkListAPIView,
)



urlpatterns = [

    # Hero API
    path("hero/", HeroListAPIView.as_view(), name="hero-list"),


    # About API
    path("about/", AboutListAPIView.as_view(), name="about-list"),


    # Skill API
    path("skills/", SkillListAPIView.as_view(), name="skill-list"),


    # Education API
    path("education/", EducationListAPIView.as_view(), name="education-list"),


    # Experience API
    path("experience/", ExperienceListAPIView.as_view(), name="experience-list"),


    # Service API
    path("services/", ServiceListAPIView.as_view(), name="service-list"),


    # Project API
    path("projects/", ProjectListAPIView.as_view(), name="project-list"),


    # Social Link API
     path("social-links/", SocialLinkListAPIView.as_view(), name="social-links"),
]