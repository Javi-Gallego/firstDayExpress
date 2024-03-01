USE fsd_library_online;

-- Crear los roles en la BD
insert into roles (id, name) values (1, 'super_admin');
insert into roles (id, name) values (2, 'admin');
insert into roles (id, name) values (3, 'user');

-- Crear usuarios en el sistema
insert into users (id, name, email, password, role_id) values (1, 'Superadmin', 'superadmin0@superadmin.com', '$08$kiyHanNciEH6kVGP76RvfOjoNJkjwPZ8mwdB6DoRLyPLq6cvumeky', 1);
insert into users (id, name, email, password, role_id) values (2, 'Admin', 'admin@admin.com', '$08$kiyHanNciEH6kVGP76RvfOjoNJkjwPZ8mwdB6DoRLyPLq6cvumeky', 2);
insert into users (id, name, email, password, role_id) values (3, 'User', 'user@user.com', '$08$kiyHanNciEH6kVGP76RvfOjoNJkjwPZ8mwdB6DoRLyPLq6cvumeky', 3);
insert into users (id, name, email, password, role_id) values (4, 'Jacobo', 'jwitherspoon3@angelfire.com', '$08$kiyHanNciEH6kVGP76RvfOjoNJkjwPZ8mwdB6DoRLyPLq6cvumeky', 2);
insert into users (id, name, email, password, role_id) values (5, 'Barbabra', 'bbottlestone4@jalbum.net', '$08$kiyHanNciEH6kVGP76RvfOjoNJkjwPZ8mwdB6DoRLyPLq6cvumeky', 2);
insert into users (id, name, email, password, role_id) values (6, 'Mac', 'mkreber5@liveinternet.ru', '$08$kiyHanNciEH6kVGP76RvfOjoNJkjwPZ8mwdB6DoRLyPLq6cvumeky', 3);
insert into users (id, name, email, password, role_id) values (7, 'Ingrid', 'iduffer6@deliciousdays.com', '$08$kiyHanNciEH6kVGP76RvfOjoNJkjwPZ8mwdB6DoRLyPLq6cvumeky', 3);
insert into users (id, name, email, password, role_id) values (8, 'Korrie', 'kdennison7@mapquest.com', '$08$kiyHanNciEH6kVGP76RvfOjoNJkjwPZ8mwdB6DoRLyPLq6cvumeky', 2);
insert into users (id, name, email, password, role_id) values (9, 'Randa', 'ravrahamian8@canalblog.com', '$08$kiyHanNciEH6kVGP76RvfOjoNJkjwPZ8mwdB6DoRLyPLq6cvumeky', 3);
insert into users (id, name, email, password, role_id) values (10, 'Shanda', 'sbilbie9@wsj.com', '$08$kiyHanNciEH6kVGP76RvfOjoNJkjwPZ8mwdB6DoRLyPLq6cvumeky', 2);
insert into users (id, name, email, password, role_id) values (11, 'Solomon', 'sballinga@amazon.co.jp', '$08$kiyHanNciEH6kVGP76RvfOjoNJkjwPZ8mwdB6DoRLyPLq6cvumeky', 3);
insert into users (id, name, email, password, role_id) values (12, 'Dylan', 'delsipb@twitpic.com', '$08$kiyHanNciEH6kVGP76RvfOjoNJkjwPZ8mwdB6DoRLyPLq6cvumeky', 3);
insert into users (id, name, email, password, role_id) values (13, 'Nonah', 'nmowettc@forbes.com', '$08$kiyHanNciEH6kVGP76RvfOjoNJkjwPZ8mwdB6DoRLyPLq6cvumeky', 3);
insert into users (id, name, email, password, role_id) values (14, 'Leanora', 'lgavinid@wisc.edu', '$08$kiyHanNciEH6kVGP76RvfOjoNJkjwPZ8mwdB6DoRLyPLq6cvumeky', 3);
insert into users (id, name, email, password, role_id) values (15, 'Bertrando', 'bdenisoviche@istockphoto.com', '$08$kiyHanNciEH6kVGP76RvfOjoNJkjwPZ8mwdB6DoRLyPLq6cvumeky', 3);