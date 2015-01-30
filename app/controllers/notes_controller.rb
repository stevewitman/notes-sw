class NotesController < ApplicationController

  before_action :set_note, only: [:show, :edit, :update, :destroy]

  def index
    @notes = Note.all
    render json: @notes
  end

  def show
    render json: @note
  end

  def edit
    render json: @note
  end

  def create
    @note = Note.new(note_params)
    if @note.save
      render json: note: @note
    end
  end

  def update
    if @note.update(note_params)
      render json: @note
    end
  end

  def destroy
    @note.destroy
    render json: note: @note
  end

private

  def set_note
    @note = Note.find(params[:id])
  end

  def note_params
    params.require(:note).permit(:title, :body)
  end

end
