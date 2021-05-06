-- 3 dummy organizations
INSERT INTO organizations (name, description, organization_logo_url)
	VALUES ('Red', 'Team Red', 'https://w7.pngwing.com/pngs/812/1001/png-transparent-red-and-white-arrow-logo-square-area-brand-apps-amd-ati-logo-intel-sign-thumbnail.png');
INSERT INTO organizations (name, description, organization_logo_url)
	VALUES ('Green', 'Team Green', 'https://img.favpng.com/8/6/10/nvidia-ico-graphics-processing-unit-icon-png-favpng-qFAZTVmaTf8DQz0cKPPRp5GQU_t.jpg');
INSERT INTO organizations (name, description, organization_logo_url)
	VALUES ('Blue', 'Team Blue', 'https://banner2.cleanpng.com/20180715/aoi/kisspng-computer-icons-photography-transparent-intel-logo-5b4c03e5d36b25.453204151531708389866.jpg');

-- 3 dummy users for each organization
INSERT INTO users (first_name, last_name, email, password, organization_id)
	VALUES ('Alice', 'Anderson', 'aanderson@red.com', 'password', 1);
INSERT INTO users (first_name, last_name, email, password, organization_id)
	VALUES ('Bob', 'Baker', 'bbaker@red.com', 'password', 1);
INSERT INTO users (first_name, last_name, email, password, organization_id)
	VALUES ('Carol', 'Campbell', 'ccampbell@red.com', 'password', 1);

INSERT INTO users (first_name, last_name, email, password, organization_id)
	VALUES ('Dean', 'Davis', 'ddavis@green.com', 'password', 2);
INSERT INTO users (first_name, last_name, email, password, organization_id)
	VALUES ('Elise', 'Evans', 'eevans@green.com', 'password', 2);
INSERT INTO users (first_name, last_name, email, password, organization_id)
	VALUES ('Fred', 'Fisher', 'ffisher@green.com', 'password', 2);

INSERT INTO users (first_name, last_name, email, password, organization_id)
	VALUES ('Greg', 'Graham', 'ggraham@blue.com', 'password', 3);
INSERT INTO users (first_name, last_name, email, password, organization_id)
	VALUES ('Helen', 'Harris', 'hharris@blue.com', 'password', 3);
INSERT INTO users (first_name, last_name, email, password, organization_id)
	VALUES ('Ian', 'Ingram', 'iingram@blue.com', 'password', 3);

-- 3 dummy credentials for each user WHERE user.organization_id = 1
INSERT INTO credentials (website_name, website_url, website_username, website_password, user_id, created_at, modified_at, category, thumbnail_logo_url)
	VALUES ('Twitter', 'https://twitter.com', 'redtwitter', 'a1a1a1', 1, '2021-04-01 00:00:01', '2021-04-01 00:00:01', 'social', 'https://seeklogo.com/images/T/twitter-icon-square-logo-108D17D373-seeklogo.com.png');
INSERT INTO credentials (website_name, website_url, website_username, website_password, user_id, created_at, modified_at, category, thumbnail_logo_url)
	VALUES ('Dropbox', 'https://www.dropbox.com', 'reddropbox', 'b2b2b2', 1, '2021-04-02 00:00:01', '2021-04-02 00:00:01', 'work', 'https://aem.dropbox.com/cms/content/dam/dropbox/www/en-us/branding/app-dropbox-windows@2x.png');
INSERT INTO credentials (website_name, website_url, website_username, website_password, user_id, created_at, modified_at, category, thumbnail_logo_url)
	VALUES ('Netflix', 'https://www.netflix.com/', 'rednetflix', 'c3c3c3', 1, '2021-04-03 00:00:01', '2021-04-03 00:00:01', 'entertainment', 'https://i.pinimg.com/originals/b3/d1/7a/b3d17a6384736431a203c0935da4b2d8.png');

INSERT INTO credentials (website_name, website_url, website_username, website_password, user_id, created_at, modified_at, category, thumbnail_logo_url)
	VALUES ('Facebook', 'https://www.facebook.com', 'redfacebook', 'd4d4d4', 2, '2021-04-04 00:00:01', '2021-04-04 00:00:01', 'social', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/480px-Facebook_logo_%28square%29.png');
INSERT INTO credentials (website_name, website_url, website_username, website_password, user_id, created_at, modified_at, category, thumbnail_logo_url)
	VALUES ('Salesforce', 'https://www.salesforce.com/', 'redsalesforce', 'e5e5e5', 2, '2021-04-05 00:00:01', '2021-04-05 00:00:01', 'work', 'https://i1.wp.com/dotweekly.com/wp-content/uploads/2018/04/salesforce-logo.png');
INSERT INTO credentials (website_name, website_url, website_username, website_password, user_id, created_at, modified_at, category, thumbnail_logo_url)
	VALUES ('Prime Video', 'https://www.primevideo.com', 'redprimevideo', 'f6f6f6', 2, '2021-04-06 00:00:01', '2021-04-06 00:00:01', 'entertainment', 'https://i.pinimg.com/originals/02/89/01/0289017ed536952e596eba113a8d5213.png');

INSERT INTO credentials (website_name, website_url, website_username, website_password, user_id, created_at, modified_at, category, thumbnail_logo_url)
	VALUES ('Instagram', 'https://www.instagram.com', 'redinstagram', 'g7g7g7', 3, '2021-04-07 00:00:01', '2021-04-07 00:00:01', 'social', 'https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-square1-512.png');
INSERT INTO credentials (website_name, website_url, website_username, website_password, user_id, created_at, modified_at, category, thumbnail_logo_url)
	VALUES ('Asana', 'https://asana.com', 'redasana', 'h8h8h8', 3, '2021-04-08 00:00:01', '2021-04-08 00:00:01', 'work', 'https://media-exp1.licdn.com/dms/image/C510BAQGiP2rzD7Jb8w/company-logo_200_200/0/1561986613569?e=2159024400&v=beta&t=Ah-Q7e7Sh6tRNYH9o8O6whmt7RUniuRivP-LY775RZ8');
INSERT INTO credentials (website_name, website_url, website_username, website_password, user_id, created_at, modified_at, category, thumbnail_logo_url)
	VALUES ('Disney Plus', 'https://www.disneyplus.com/', 'reddisneyplus', 'i9i9i9', 3, '2021-04-09 00:00:01', '2021-04-09 00:00:01', 'entertainment', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ficons8.com%2Ficon%2F4tkTkVC6UFcr%2Fdisney-plus&psig=AOvVaw3rmBpxaC_Ta58RBmkMz2es&ust=1620068341993000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJiguITXq_ACFQAAAAAdAAAAABAD');
