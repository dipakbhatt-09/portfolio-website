from django.db import models

# Hero Model
class Hero(models.Model):
    full_name = models.CharField(max_length=100)
    subtitle = models.TextField()

    resume = models.FileField(upload_to="hero/resume/")
    profile_image = models.ImageField(
        upload_to="hero/profile/",
        blank=True,
        null=True
    )

    is_active = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.full_name



# Hero Typing Titles
class HeroTitle(models.Model):
    hero = models.ForeignKey(
        Hero,
        on_delete=models.CASCADE,
        related_name="titles"
    )

    title = models.CharField(max_length=100)

    display_order = models.PositiveIntegerField(default=1)

    is_active = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["display_order"]

    def __str__(self):
        return self.title



# About
class About(models.Model):
    heading = models.CharField(max_length=100)
    description = models.TextField()

    email = models.EmailField()
    phone = models.CharField(max_length=20)
    address = models.CharField(max_length=255)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.heading

    

# Skills
class Skill(models.Model):

    skill_name = models.CharField(
        max_length=100
    )

    description = models.CharField(
        max_length=200
    )

    is_active = models.BooleanField(
        default=True
    )

    display_order = models.PositiveIntegerField(
        default=1
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    updated_at = models.DateTimeField(
        auto_now=True
    )


    class Meta:
        ordering = [
            "display_order"
        ]


    def __str__(self):
        return self.skill_name

    


# Education
class Education(models.Model):
    degree = models.CharField(max_length=200)

    institution = models.CharField(max_length=200)

    location = models.CharField(max_length=200)

    start_year = models.CharField(max_length=20)

    end_year = models.CharField(max_length=20)

    description = models.TextField(blank=True)

    is_active = models.BooleanField(default=True)

    display_order = models.PositiveIntegerField(default=1)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["display_order"]

    def __str__(self):
        return self.degree



# Experience
class Experience(models.Model):
    job_title = models.CharField(max_length=200)

    company = models.CharField(max_length=200)

    location = models.CharField(max_length=200)

    employment_type = models.CharField(max_length=50)

    start_date = models.CharField(max_length=30)

    end_date = models.CharField(
        max_length=30,
        blank=True
    )

    currently_working = models.BooleanField(default=False)

    description = models.TextField()

    is_active = models.BooleanField(default=True)

    display_order = models.PositiveIntegerField(default=1)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["display_order"]

    def __str__(self):
        return self.job_title



# Services
class Service(models.Model):
    title = models.CharField(max_length=200)

    icon = models.ImageField(
        upload_to="services/",
        blank=True,
        null=True
    )

    description = models.TextField()

    is_active = models.BooleanField(default=True)

    display_order = models.PositiveIntegerField(default=1)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["display_order"]

    def __str__(self):
        return self.title



# Projects
class Project(models.Model):
    title = models.CharField(max_length=200)

    image = models.ImageField(upload_to="projects/")

    description = models.TextField()

    technologies = models.CharField(max_length=300)

    github_link = models.URLField(blank=True)

    live_demo = models.URLField(blank=True)

    is_featured = models.BooleanField(default=False)

    is_active = models.BooleanField(default=True)

    display_order = models.PositiveIntegerField(default=1)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["display_order"]

    def __str__(self):
        return self.title



# Social Links
class SocialLink(models.Model):
    platform = models.CharField(max_length=100)

    icon = models.ImageField(
        upload_to="social/",
        blank=True,
        null=True
    )

    url = models.URLField()

    is_active = models.BooleanField(default=True)

    display_order = models.PositiveIntegerField(default=1)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["display_order"]

    def __str__(self):
        return self.platform