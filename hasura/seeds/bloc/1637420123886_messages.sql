SET check_function_bodies = false;
INSERT INTO public.messages (id, id_utilisateur, contenu, updated_at) VALUES (5, 1, 'Hello', '2021-11-20 14:45:28.631419+00');
INSERT INTO public.messages (id, id_utilisateur, contenu, updated_at) VALUES (6, 2, 'Quelle est la différence entre un pigeon ?', '2021-11-20 14:51:41.267217+00');
INSERT INTO public.messages (id, id_utilisateur, contenu, updated_at) VALUES (7, 2, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullam', '2021-11-20 14:52:12.122468+00');
INSERT INTO public.messages (id, id_utilisateur, contenu, updated_at) VALUES (8, 3, 'Re :)', '2021-11-20 14:52:17.615516+00');
INSERT INTO public.messages (id, id_utilisateur, contenu, updated_at) VALUES (9, 3, 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '2021-11-20 14:52:28.860191+00');
SELECT pg_catalog.setval('public.messages_id_seq', 9, true);
