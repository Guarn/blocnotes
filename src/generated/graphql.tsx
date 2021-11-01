import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "notes" */
  delete_notes?: Maybe<Notes_Mutation_Response>;
  /** delete single row from the table: "notes" */
  delete_notes_by_pk?: Maybe<Notes>;
  /** delete data from the table: "notes_utilisateurs" */
  delete_notes_utilisateurs?: Maybe<Notes_Utilisateurs_Mutation_Response>;
  /** delete single row from the table: "notes_utilisateurs" */
  delete_notes_utilisateurs_by_pk?: Maybe<Notes_Utilisateurs>;
  /** delete data from the table: "utilisateur" */
  delete_utilisateur?: Maybe<Utilisateur_Mutation_Response>;
  /** delete single row from the table: "utilisateur" */
  delete_utilisateur_by_pk?: Maybe<Utilisateur>;
  /** insert data into the table: "notes" */
  insert_notes?: Maybe<Notes_Mutation_Response>;
  /** insert a single row into the table: "notes" */
  insert_notes_one?: Maybe<Notes>;
  /** insert data into the table: "notes_utilisateurs" */
  insert_notes_utilisateurs?: Maybe<Notes_Utilisateurs_Mutation_Response>;
  /** insert a single row into the table: "notes_utilisateurs" */
  insert_notes_utilisateurs_one?: Maybe<Notes_Utilisateurs>;
  /** insert data into the table: "utilisateur" */
  insert_utilisateur?: Maybe<Utilisateur_Mutation_Response>;
  /** insert a single row into the table: "utilisateur" */
  insert_utilisateur_one?: Maybe<Utilisateur>;
  /** update data of the table: "notes" */
  update_notes?: Maybe<Notes_Mutation_Response>;
  /** update single row of the table: "notes" */
  update_notes_by_pk?: Maybe<Notes>;
  /** update data of the table: "notes_utilisateurs" */
  update_notes_utilisateurs?: Maybe<Notes_Utilisateurs_Mutation_Response>;
  /** update single row of the table: "notes_utilisateurs" */
  update_notes_utilisateurs_by_pk?: Maybe<Notes_Utilisateurs>;
  /** update data of the table: "utilisateur" */
  update_utilisateur?: Maybe<Utilisateur_Mutation_Response>;
  /** update single row of the table: "utilisateur" */
  update_utilisateur_by_pk?: Maybe<Utilisateur>;
};


/** mutation root */
export type Mutation_RootDelete_NotesArgs = {
  where: Notes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Notes_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Notes_UtilisateursArgs = {
  where: Notes_Utilisateurs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Notes_Utilisateurs_By_PkArgs = {
  id_note_utilisateur: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UtilisateurArgs = {
  where: Utilisateur_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Utilisateur_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_NotesArgs = {
  objects: Array<Notes_Insert_Input>;
  on_conflict?: Maybe<Notes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Notes_OneArgs = {
  object: Notes_Insert_Input;
  on_conflict?: Maybe<Notes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Notes_UtilisateursArgs = {
  objects: Array<Notes_Utilisateurs_Insert_Input>;
  on_conflict?: Maybe<Notes_Utilisateurs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Notes_Utilisateurs_OneArgs = {
  object: Notes_Utilisateurs_Insert_Input;
  on_conflict?: Maybe<Notes_Utilisateurs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UtilisateurArgs = {
  objects: Array<Utilisateur_Insert_Input>;
  on_conflict?: Maybe<Utilisateur_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Utilisateur_OneArgs = {
  object: Utilisateur_Insert_Input;
  on_conflict?: Maybe<Utilisateur_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_NotesArgs = {
  _inc?: Maybe<Notes_Inc_Input>;
  _set?: Maybe<Notes_Set_Input>;
  where: Notes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Notes_By_PkArgs = {
  _inc?: Maybe<Notes_Inc_Input>;
  _set?: Maybe<Notes_Set_Input>;
  pk_columns: Notes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Notes_UtilisateursArgs = {
  _inc?: Maybe<Notes_Utilisateurs_Inc_Input>;
  _set?: Maybe<Notes_Utilisateurs_Set_Input>;
  where: Notes_Utilisateurs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Notes_Utilisateurs_By_PkArgs = {
  _inc?: Maybe<Notes_Utilisateurs_Inc_Input>;
  _set?: Maybe<Notes_Utilisateurs_Set_Input>;
  pk_columns: Notes_Utilisateurs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UtilisateurArgs = {
  _inc?: Maybe<Utilisateur_Inc_Input>;
  _set?: Maybe<Utilisateur_Set_Input>;
  where: Utilisateur_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Utilisateur_By_PkArgs = {
  _inc?: Maybe<Utilisateur_Inc_Input>;
  _set?: Maybe<Utilisateur_Set_Input>;
  pk_columns: Utilisateur_Pk_Columns_Input;
};

/** columns and relationships of "notes" */
export type Notes = {
  __typename?: 'notes';
  active: Scalars['Boolean'];
  contenu: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** fetch data from the table: "notes_utilisateurs" */
  notes_utilisateurs: Array<Notes_Utilisateurs>;
  /** An aggregate relationship */
  notes_utilisateurs_aggregate: Notes_Utilisateurs_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "notes" */
export type NotesNotes_UtilisateursArgs = {
  distinct_on?: Maybe<Array<Notes_Utilisateurs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notes_Utilisateurs_Order_By>>;
  where?: Maybe<Notes_Utilisateurs_Bool_Exp>;
};


/** columns and relationships of "notes" */
export type NotesNotes_Utilisateurs_AggregateArgs = {
  distinct_on?: Maybe<Array<Notes_Utilisateurs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notes_Utilisateurs_Order_By>>;
  where?: Maybe<Notes_Utilisateurs_Bool_Exp>;
};

/** aggregated selection of "notes" */
export type Notes_Aggregate = {
  __typename?: 'notes_aggregate';
  aggregate?: Maybe<Notes_Aggregate_Fields>;
  nodes: Array<Notes>;
};

/** aggregate fields of "notes" */
export type Notes_Aggregate_Fields = {
  __typename?: 'notes_aggregate_fields';
  avg?: Maybe<Notes_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Notes_Max_Fields>;
  min?: Maybe<Notes_Min_Fields>;
  stddev?: Maybe<Notes_Stddev_Fields>;
  stddev_pop?: Maybe<Notes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Notes_Stddev_Samp_Fields>;
  sum?: Maybe<Notes_Sum_Fields>;
  var_pop?: Maybe<Notes_Var_Pop_Fields>;
  var_samp?: Maybe<Notes_Var_Samp_Fields>;
  variance?: Maybe<Notes_Variance_Fields>;
};


/** aggregate fields of "notes" */
export type Notes_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Notes_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Notes_Avg_Fields = {
  __typename?: 'notes_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "notes". All fields are combined with a logical 'AND'. */
export type Notes_Bool_Exp = {
  _and?: Maybe<Array<Notes_Bool_Exp>>;
  _not?: Maybe<Notes_Bool_Exp>;
  _or?: Maybe<Array<Notes_Bool_Exp>>;
  active?: Maybe<Boolean_Comparison_Exp>;
  contenu?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  notes_utilisateurs?: Maybe<Notes_Utilisateurs_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "notes" */
export enum Notes_Constraint {
  /** unique or primary key constraint */
  NotesPkey = 'notes_pkey'
}

/** input type for incrementing numeric columns in table "notes" */
export type Notes_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "notes" */
export type Notes_Insert_Input = {
  active?: Maybe<Scalars['Boolean']>;
  contenu?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  notes_utilisateurs?: Maybe<Notes_Utilisateurs_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Notes_Max_Fields = {
  __typename?: 'notes_max_fields';
  contenu?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Notes_Min_Fields = {
  __typename?: 'notes_min_fields';
  contenu?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "notes" */
export type Notes_Mutation_Response = {
  __typename?: 'notes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Notes>;
};

/** input type for inserting object relation for remote table "notes" */
export type Notes_Obj_Rel_Insert_Input = {
  data: Notes_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Notes_On_Conflict>;
};

/** on conflict condition type for table "notes" */
export type Notes_On_Conflict = {
  constraint: Notes_Constraint;
  update_columns?: Array<Notes_Update_Column>;
  where?: Maybe<Notes_Bool_Exp>;
};

/** Ordering options when selecting data from "notes". */
export type Notes_Order_By = {
  active?: Maybe<Order_By>;
  contenu?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  notes_utilisateurs_aggregate?: Maybe<Notes_Utilisateurs_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: notes */
export type Notes_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "notes" */
export enum Notes_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Contenu = 'contenu',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "notes" */
export type Notes_Set_Input = {
  active?: Maybe<Scalars['Boolean']>;
  contenu?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Notes_Stddev_Fields = {
  __typename?: 'notes_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Notes_Stddev_Pop_Fields = {
  __typename?: 'notes_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Notes_Stddev_Samp_Fields = {
  __typename?: 'notes_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Notes_Sum_Fields = {
  __typename?: 'notes_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "notes" */
export enum Notes_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Contenu = 'contenu',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "notes_utilisateurs" */
export type Notes_Utilisateurs = {
  __typename?: 'notes_utilisateurs';
  id_note: Scalars['Int'];
  id_note_utilisateur: Scalars['Int'];
  id_utilisateur: Scalars['Int'];
  /** An object relationship */
  note: Notes;
  /** An object relationship */
  utilisateur: Utilisateur;
};

/** aggregated selection of "notes_utilisateurs" */
export type Notes_Utilisateurs_Aggregate = {
  __typename?: 'notes_utilisateurs_aggregate';
  aggregate?: Maybe<Notes_Utilisateurs_Aggregate_Fields>;
  nodes: Array<Notes_Utilisateurs>;
};

/** aggregate fields of "notes_utilisateurs" */
export type Notes_Utilisateurs_Aggregate_Fields = {
  __typename?: 'notes_utilisateurs_aggregate_fields';
  avg?: Maybe<Notes_Utilisateurs_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Notes_Utilisateurs_Max_Fields>;
  min?: Maybe<Notes_Utilisateurs_Min_Fields>;
  stddev?: Maybe<Notes_Utilisateurs_Stddev_Fields>;
  stddev_pop?: Maybe<Notes_Utilisateurs_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Notes_Utilisateurs_Stddev_Samp_Fields>;
  sum?: Maybe<Notes_Utilisateurs_Sum_Fields>;
  var_pop?: Maybe<Notes_Utilisateurs_Var_Pop_Fields>;
  var_samp?: Maybe<Notes_Utilisateurs_Var_Samp_Fields>;
  variance?: Maybe<Notes_Utilisateurs_Variance_Fields>;
};


/** aggregate fields of "notes_utilisateurs" */
export type Notes_Utilisateurs_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Notes_Utilisateurs_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "notes_utilisateurs" */
export type Notes_Utilisateurs_Aggregate_Order_By = {
  avg?: Maybe<Notes_Utilisateurs_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Notes_Utilisateurs_Max_Order_By>;
  min?: Maybe<Notes_Utilisateurs_Min_Order_By>;
  stddev?: Maybe<Notes_Utilisateurs_Stddev_Order_By>;
  stddev_pop?: Maybe<Notes_Utilisateurs_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Notes_Utilisateurs_Stddev_Samp_Order_By>;
  sum?: Maybe<Notes_Utilisateurs_Sum_Order_By>;
  var_pop?: Maybe<Notes_Utilisateurs_Var_Pop_Order_By>;
  var_samp?: Maybe<Notes_Utilisateurs_Var_Samp_Order_By>;
  variance?: Maybe<Notes_Utilisateurs_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "notes_utilisateurs" */
export type Notes_Utilisateurs_Arr_Rel_Insert_Input = {
  data: Array<Notes_Utilisateurs_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Notes_Utilisateurs_On_Conflict>;
};

/** aggregate avg on columns */
export type Notes_Utilisateurs_Avg_Fields = {
  __typename?: 'notes_utilisateurs_avg_fields';
  id_note?: Maybe<Scalars['Float']>;
  id_note_utilisateur?: Maybe<Scalars['Float']>;
  id_utilisateur?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "notes_utilisateurs" */
export type Notes_Utilisateurs_Avg_Order_By = {
  id_note?: Maybe<Order_By>;
  id_note_utilisateur?: Maybe<Order_By>;
  id_utilisateur?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "notes_utilisateurs". All fields are combined with a logical 'AND'. */
export type Notes_Utilisateurs_Bool_Exp = {
  _and?: Maybe<Array<Notes_Utilisateurs_Bool_Exp>>;
  _not?: Maybe<Notes_Utilisateurs_Bool_Exp>;
  _or?: Maybe<Array<Notes_Utilisateurs_Bool_Exp>>;
  id_note?: Maybe<Int_Comparison_Exp>;
  id_note_utilisateur?: Maybe<Int_Comparison_Exp>;
  id_utilisateur?: Maybe<Int_Comparison_Exp>;
  note?: Maybe<Notes_Bool_Exp>;
  utilisateur?: Maybe<Utilisateur_Bool_Exp>;
};

/** unique or primary key constraints on table "notes_utilisateurs" */
export enum Notes_Utilisateurs_Constraint {
  /** unique or primary key constraint */
  NotesUtilisateursPkey = 'notes_utilisateurs_pkey'
}

/** input type for incrementing numeric columns in table "notes_utilisateurs" */
export type Notes_Utilisateurs_Inc_Input = {
  id_note?: Maybe<Scalars['Int']>;
  id_note_utilisateur?: Maybe<Scalars['Int']>;
  id_utilisateur?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "notes_utilisateurs" */
export type Notes_Utilisateurs_Insert_Input = {
  id_note?: Maybe<Scalars['Int']>;
  id_note_utilisateur?: Maybe<Scalars['Int']>;
  id_utilisateur?: Maybe<Scalars['Int']>;
  note?: Maybe<Notes_Obj_Rel_Insert_Input>;
  utilisateur?: Maybe<Utilisateur_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Notes_Utilisateurs_Max_Fields = {
  __typename?: 'notes_utilisateurs_max_fields';
  id_note?: Maybe<Scalars['Int']>;
  id_note_utilisateur?: Maybe<Scalars['Int']>;
  id_utilisateur?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "notes_utilisateurs" */
export type Notes_Utilisateurs_Max_Order_By = {
  id_note?: Maybe<Order_By>;
  id_note_utilisateur?: Maybe<Order_By>;
  id_utilisateur?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Notes_Utilisateurs_Min_Fields = {
  __typename?: 'notes_utilisateurs_min_fields';
  id_note?: Maybe<Scalars['Int']>;
  id_note_utilisateur?: Maybe<Scalars['Int']>;
  id_utilisateur?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "notes_utilisateurs" */
export type Notes_Utilisateurs_Min_Order_By = {
  id_note?: Maybe<Order_By>;
  id_note_utilisateur?: Maybe<Order_By>;
  id_utilisateur?: Maybe<Order_By>;
};

/** response of any mutation on the table "notes_utilisateurs" */
export type Notes_Utilisateurs_Mutation_Response = {
  __typename?: 'notes_utilisateurs_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Notes_Utilisateurs>;
};

/** on conflict condition type for table "notes_utilisateurs" */
export type Notes_Utilisateurs_On_Conflict = {
  constraint: Notes_Utilisateurs_Constraint;
  update_columns?: Array<Notes_Utilisateurs_Update_Column>;
  where?: Maybe<Notes_Utilisateurs_Bool_Exp>;
};

/** Ordering options when selecting data from "notes_utilisateurs". */
export type Notes_Utilisateurs_Order_By = {
  id_note?: Maybe<Order_By>;
  id_note_utilisateur?: Maybe<Order_By>;
  id_utilisateur?: Maybe<Order_By>;
  note?: Maybe<Notes_Order_By>;
  utilisateur?: Maybe<Utilisateur_Order_By>;
};

/** primary key columns input for table: notes_utilisateurs */
export type Notes_Utilisateurs_Pk_Columns_Input = {
  id_note_utilisateur: Scalars['Int'];
};

/** select columns of table "notes_utilisateurs" */
export enum Notes_Utilisateurs_Select_Column {
  /** column name */
  IdNote = 'id_note',
  /** column name */
  IdNoteUtilisateur = 'id_note_utilisateur',
  /** column name */
  IdUtilisateur = 'id_utilisateur'
}

/** input type for updating data in table "notes_utilisateurs" */
export type Notes_Utilisateurs_Set_Input = {
  id_note?: Maybe<Scalars['Int']>;
  id_note_utilisateur?: Maybe<Scalars['Int']>;
  id_utilisateur?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Notes_Utilisateurs_Stddev_Fields = {
  __typename?: 'notes_utilisateurs_stddev_fields';
  id_note?: Maybe<Scalars['Float']>;
  id_note_utilisateur?: Maybe<Scalars['Float']>;
  id_utilisateur?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "notes_utilisateurs" */
export type Notes_Utilisateurs_Stddev_Order_By = {
  id_note?: Maybe<Order_By>;
  id_note_utilisateur?: Maybe<Order_By>;
  id_utilisateur?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Notes_Utilisateurs_Stddev_Pop_Fields = {
  __typename?: 'notes_utilisateurs_stddev_pop_fields';
  id_note?: Maybe<Scalars['Float']>;
  id_note_utilisateur?: Maybe<Scalars['Float']>;
  id_utilisateur?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "notes_utilisateurs" */
export type Notes_Utilisateurs_Stddev_Pop_Order_By = {
  id_note?: Maybe<Order_By>;
  id_note_utilisateur?: Maybe<Order_By>;
  id_utilisateur?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Notes_Utilisateurs_Stddev_Samp_Fields = {
  __typename?: 'notes_utilisateurs_stddev_samp_fields';
  id_note?: Maybe<Scalars['Float']>;
  id_note_utilisateur?: Maybe<Scalars['Float']>;
  id_utilisateur?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "notes_utilisateurs" */
export type Notes_Utilisateurs_Stddev_Samp_Order_By = {
  id_note?: Maybe<Order_By>;
  id_note_utilisateur?: Maybe<Order_By>;
  id_utilisateur?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Notes_Utilisateurs_Sum_Fields = {
  __typename?: 'notes_utilisateurs_sum_fields';
  id_note?: Maybe<Scalars['Int']>;
  id_note_utilisateur?: Maybe<Scalars['Int']>;
  id_utilisateur?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "notes_utilisateurs" */
export type Notes_Utilisateurs_Sum_Order_By = {
  id_note?: Maybe<Order_By>;
  id_note_utilisateur?: Maybe<Order_By>;
  id_utilisateur?: Maybe<Order_By>;
};

/** update columns of table "notes_utilisateurs" */
export enum Notes_Utilisateurs_Update_Column {
  /** column name */
  IdNote = 'id_note',
  /** column name */
  IdNoteUtilisateur = 'id_note_utilisateur',
  /** column name */
  IdUtilisateur = 'id_utilisateur'
}

/** aggregate var_pop on columns */
export type Notes_Utilisateurs_Var_Pop_Fields = {
  __typename?: 'notes_utilisateurs_var_pop_fields';
  id_note?: Maybe<Scalars['Float']>;
  id_note_utilisateur?: Maybe<Scalars['Float']>;
  id_utilisateur?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "notes_utilisateurs" */
export type Notes_Utilisateurs_Var_Pop_Order_By = {
  id_note?: Maybe<Order_By>;
  id_note_utilisateur?: Maybe<Order_By>;
  id_utilisateur?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Notes_Utilisateurs_Var_Samp_Fields = {
  __typename?: 'notes_utilisateurs_var_samp_fields';
  id_note?: Maybe<Scalars['Float']>;
  id_note_utilisateur?: Maybe<Scalars['Float']>;
  id_utilisateur?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "notes_utilisateurs" */
export type Notes_Utilisateurs_Var_Samp_Order_By = {
  id_note?: Maybe<Order_By>;
  id_note_utilisateur?: Maybe<Order_By>;
  id_utilisateur?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Notes_Utilisateurs_Variance_Fields = {
  __typename?: 'notes_utilisateurs_variance_fields';
  id_note?: Maybe<Scalars['Float']>;
  id_note_utilisateur?: Maybe<Scalars['Float']>;
  id_utilisateur?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "notes_utilisateurs" */
export type Notes_Utilisateurs_Variance_Order_By = {
  id_note?: Maybe<Order_By>;
  id_note_utilisateur?: Maybe<Order_By>;
  id_utilisateur?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Notes_Var_Pop_Fields = {
  __typename?: 'notes_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Notes_Var_Samp_Fields = {
  __typename?: 'notes_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Notes_Variance_Fields = {
  __typename?: 'notes_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "notes" */
  notes: Array<Notes>;
  /** fetch aggregated fields from the table: "notes" */
  notes_aggregate: Notes_Aggregate;
  /** fetch data from the table: "notes" using primary key columns */
  notes_by_pk?: Maybe<Notes>;
  /** fetch data from the table: "notes_utilisateurs" */
  notes_utilisateurs: Array<Notes_Utilisateurs>;
  /** An aggregate relationship */
  notes_utilisateurs_aggregate: Notes_Utilisateurs_Aggregate;
  /** fetch data from the table: "notes_utilisateurs" using primary key columns */
  notes_utilisateurs_by_pk?: Maybe<Notes_Utilisateurs>;
  /** fetch data from the table: "utilisateur" */
  utilisateur: Array<Utilisateur>;
  /** fetch aggregated fields from the table: "utilisateur" */
  utilisateur_aggregate: Utilisateur_Aggregate;
  /** fetch data from the table: "utilisateur" using primary key columns */
  utilisateur_by_pk?: Maybe<Utilisateur>;
};


export type Query_RootNotesArgs = {
  distinct_on?: Maybe<Array<Notes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notes_Order_By>>;
  where?: Maybe<Notes_Bool_Exp>;
};


export type Query_RootNotes_AggregateArgs = {
  distinct_on?: Maybe<Array<Notes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notes_Order_By>>;
  where?: Maybe<Notes_Bool_Exp>;
};


export type Query_RootNotes_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootNotes_UtilisateursArgs = {
  distinct_on?: Maybe<Array<Notes_Utilisateurs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notes_Utilisateurs_Order_By>>;
  where?: Maybe<Notes_Utilisateurs_Bool_Exp>;
};


export type Query_RootNotes_Utilisateurs_AggregateArgs = {
  distinct_on?: Maybe<Array<Notes_Utilisateurs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notes_Utilisateurs_Order_By>>;
  where?: Maybe<Notes_Utilisateurs_Bool_Exp>;
};


export type Query_RootNotes_Utilisateurs_By_PkArgs = {
  id_note_utilisateur: Scalars['Int'];
};


export type Query_RootUtilisateurArgs = {
  distinct_on?: Maybe<Array<Utilisateur_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Utilisateur_Order_By>>;
  where?: Maybe<Utilisateur_Bool_Exp>;
};


export type Query_RootUtilisateur_AggregateArgs = {
  distinct_on?: Maybe<Array<Utilisateur_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Utilisateur_Order_By>>;
  where?: Maybe<Utilisateur_Bool_Exp>;
};


export type Query_RootUtilisateur_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "notes" */
  notes: Array<Notes>;
  /** fetch aggregated fields from the table: "notes" */
  notes_aggregate: Notes_Aggregate;
  /** fetch data from the table: "notes" using primary key columns */
  notes_by_pk?: Maybe<Notes>;
  /** fetch data from the table: "notes_utilisateurs" */
  notes_utilisateurs: Array<Notes_Utilisateurs>;
  /** An aggregate relationship */
  notes_utilisateurs_aggregate: Notes_Utilisateurs_Aggregate;
  /** fetch data from the table: "notes_utilisateurs" using primary key columns */
  notes_utilisateurs_by_pk?: Maybe<Notes_Utilisateurs>;
  /** fetch data from the table: "utilisateur" */
  utilisateur: Array<Utilisateur>;
  /** fetch aggregated fields from the table: "utilisateur" */
  utilisateur_aggregate: Utilisateur_Aggregate;
  /** fetch data from the table: "utilisateur" using primary key columns */
  utilisateur_by_pk?: Maybe<Utilisateur>;
};


export type Subscription_RootNotesArgs = {
  distinct_on?: Maybe<Array<Notes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notes_Order_By>>;
  where?: Maybe<Notes_Bool_Exp>;
};


export type Subscription_RootNotes_AggregateArgs = {
  distinct_on?: Maybe<Array<Notes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notes_Order_By>>;
  where?: Maybe<Notes_Bool_Exp>;
};


export type Subscription_RootNotes_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootNotes_UtilisateursArgs = {
  distinct_on?: Maybe<Array<Notes_Utilisateurs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notes_Utilisateurs_Order_By>>;
  where?: Maybe<Notes_Utilisateurs_Bool_Exp>;
};


export type Subscription_RootNotes_Utilisateurs_AggregateArgs = {
  distinct_on?: Maybe<Array<Notes_Utilisateurs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notes_Utilisateurs_Order_By>>;
  where?: Maybe<Notes_Utilisateurs_Bool_Exp>;
};


export type Subscription_RootNotes_Utilisateurs_By_PkArgs = {
  id_note_utilisateur: Scalars['Int'];
};


export type Subscription_RootUtilisateurArgs = {
  distinct_on?: Maybe<Array<Utilisateur_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Utilisateur_Order_By>>;
  where?: Maybe<Utilisateur_Bool_Exp>;
};


export type Subscription_RootUtilisateur_AggregateArgs = {
  distinct_on?: Maybe<Array<Utilisateur_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Utilisateur_Order_By>>;
  where?: Maybe<Utilisateur_Bool_Exp>;
};


export type Subscription_RootUtilisateur_By_PkArgs = {
  id: Scalars['Int'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "utilisateur" */
export type Utilisateur = {
  __typename?: 'utilisateur';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** fetch data from the table: "notes_utilisateurs" */
  notes_utilisateurs: Array<Notes_Utilisateurs>;
  /** An aggregate relationship */
  notes_utilisateurs_aggregate: Notes_Utilisateurs_Aggregate;
  pseudonyme: Scalars['String'];
};


/** columns and relationships of "utilisateur" */
export type UtilisateurNotes_UtilisateursArgs = {
  distinct_on?: Maybe<Array<Notes_Utilisateurs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notes_Utilisateurs_Order_By>>;
  where?: Maybe<Notes_Utilisateurs_Bool_Exp>;
};


/** columns and relationships of "utilisateur" */
export type UtilisateurNotes_Utilisateurs_AggregateArgs = {
  distinct_on?: Maybe<Array<Notes_Utilisateurs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notes_Utilisateurs_Order_By>>;
  where?: Maybe<Notes_Utilisateurs_Bool_Exp>;
};

/** aggregated selection of "utilisateur" */
export type Utilisateur_Aggregate = {
  __typename?: 'utilisateur_aggregate';
  aggregate?: Maybe<Utilisateur_Aggregate_Fields>;
  nodes: Array<Utilisateur>;
};

/** aggregate fields of "utilisateur" */
export type Utilisateur_Aggregate_Fields = {
  __typename?: 'utilisateur_aggregate_fields';
  avg?: Maybe<Utilisateur_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Utilisateur_Max_Fields>;
  min?: Maybe<Utilisateur_Min_Fields>;
  stddev?: Maybe<Utilisateur_Stddev_Fields>;
  stddev_pop?: Maybe<Utilisateur_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Utilisateur_Stddev_Samp_Fields>;
  sum?: Maybe<Utilisateur_Sum_Fields>;
  var_pop?: Maybe<Utilisateur_Var_Pop_Fields>;
  var_samp?: Maybe<Utilisateur_Var_Samp_Fields>;
  variance?: Maybe<Utilisateur_Variance_Fields>;
};


/** aggregate fields of "utilisateur" */
export type Utilisateur_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Utilisateur_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Utilisateur_Avg_Fields = {
  __typename?: 'utilisateur_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "utilisateur". All fields are combined with a logical 'AND'. */
export type Utilisateur_Bool_Exp = {
  _and?: Maybe<Array<Utilisateur_Bool_Exp>>;
  _not?: Maybe<Utilisateur_Bool_Exp>;
  _or?: Maybe<Array<Utilisateur_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  notes_utilisateurs?: Maybe<Notes_Utilisateurs_Bool_Exp>;
  pseudonyme?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "utilisateur" */
export enum Utilisateur_Constraint {
  /** unique or primary key constraint */
  UtilisateurPkey = 'utilisateur_pkey'
}

/** input type for incrementing numeric columns in table "utilisateur" */
export type Utilisateur_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "utilisateur" */
export type Utilisateur_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  notes_utilisateurs?: Maybe<Notes_Utilisateurs_Arr_Rel_Insert_Input>;
  pseudonyme?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Utilisateur_Max_Fields = {
  __typename?: 'utilisateur_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  pseudonyme?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Utilisateur_Min_Fields = {
  __typename?: 'utilisateur_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  pseudonyme?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "utilisateur" */
export type Utilisateur_Mutation_Response = {
  __typename?: 'utilisateur_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Utilisateur>;
};

/** input type for inserting object relation for remote table "utilisateur" */
export type Utilisateur_Obj_Rel_Insert_Input = {
  data: Utilisateur_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Utilisateur_On_Conflict>;
};

/** on conflict condition type for table "utilisateur" */
export type Utilisateur_On_Conflict = {
  constraint: Utilisateur_Constraint;
  update_columns?: Array<Utilisateur_Update_Column>;
  where?: Maybe<Utilisateur_Bool_Exp>;
};

/** Ordering options when selecting data from "utilisateur". */
export type Utilisateur_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  notes_utilisateurs_aggregate?: Maybe<Notes_Utilisateurs_Aggregate_Order_By>;
  pseudonyme?: Maybe<Order_By>;
};

/** primary key columns input for table: utilisateur */
export type Utilisateur_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "utilisateur" */
export enum Utilisateur_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Pseudonyme = 'pseudonyme'
}

/** input type for updating data in table "utilisateur" */
export type Utilisateur_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  pseudonyme?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Utilisateur_Stddev_Fields = {
  __typename?: 'utilisateur_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Utilisateur_Stddev_Pop_Fields = {
  __typename?: 'utilisateur_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Utilisateur_Stddev_Samp_Fields = {
  __typename?: 'utilisateur_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Utilisateur_Sum_Fields = {
  __typename?: 'utilisateur_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "utilisateur" */
export enum Utilisateur_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Pseudonyme = 'pseudonyme'
}

/** aggregate var_pop on columns */
export type Utilisateur_Var_Pop_Fields = {
  __typename?: 'utilisateur_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Utilisateur_Var_Samp_Fields = {
  __typename?: 'utilisateur_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Utilisateur_Variance_Fields = {
  __typename?: 'utilisateur_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type GetUsersWithNotesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersWithNotesQuery = { __typename?: 'query_root', utilisateur: Array<{ __typename?: 'utilisateur', pseudonyme: string, notes_utilisateurs: Array<{ __typename?: 'notes_utilisateurs', note: { __typename?: 'notes', contenu: string, active: boolean } }> }> };


export const GetUsersWithNotesDocument = gql`
    query GetUsersWithNotes {
  utilisateur {
    pseudonyme
    notes_utilisateurs {
      note {
        contenu
        active
      }
    }
  }
}
    `;

/**
 * __useGetUsersWithNotesQuery__
 *
 * To run a query within a React component, call `useGetUsersWithNotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersWithNotesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersWithNotesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersWithNotesQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersWithNotesQuery, GetUsersWithNotesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersWithNotesQuery, GetUsersWithNotesQueryVariables>(GetUsersWithNotesDocument, options);
      }
export function useGetUsersWithNotesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersWithNotesQuery, GetUsersWithNotesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersWithNotesQuery, GetUsersWithNotesQueryVariables>(GetUsersWithNotesDocument, options);
        }
export type GetUsersWithNotesQueryHookResult = ReturnType<typeof useGetUsersWithNotesQuery>;
export type GetUsersWithNotesLazyQueryHookResult = ReturnType<typeof useGetUsersWithNotesLazyQuery>;
export type GetUsersWithNotesQueryResult = Apollo.QueryResult<GetUsersWithNotesQuery, GetUsersWithNotesQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    